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
    res.status(200).json({ message: "Created..." })
}

module.exports = { signUp, login }