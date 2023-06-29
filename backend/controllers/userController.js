const model = require("../models/userModel")
const bycrypt = require("bcryptjs")
const signUp = async (req, res) => {
    try {
        const { fullname, password, email } = req.body;
        const hashed = await bycrypt.hash(password, 10);
        const user = await model.create({
            fullname,
            password: hashed,
            email
        })
        res.status(201).json(user)
    } catch (err) {
        res.status(404).json(err.message)
    }
}


const login = async (req, res) => {
    try {
        const { fullname, password } = req.body;
        const user = await model.find({ $or: [{ fullname }, { email: fullname }] });
        if (!user) res.status(404).json({ message: "User not found" });


        if (await bycrypt.compare(password, user[0].password)) {
            res.status(200).json(user[0])
        } else {
            res.status(404).json({ message: "Invalid Password" })
        }
    } catch (err) {
        res.status(404).json(err.message)
    }
}

module.exports = { signUp, login }