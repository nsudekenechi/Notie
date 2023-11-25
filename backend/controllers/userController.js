const model = require("../models/userModel")
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const signToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRETKEY);
    return token;
}
const signUp = async (req, res) => {
    try {
        const { fullname, password, email } = req.body;
        if (!fullname) {
            throw new Error("Please Enter Fullname")
        }
        if (!email) {
            throw new Error("Please Enter Email")
        }
        if (!password) {
            throw new Error("Please Enter Password")
        }
        const alreadyCreatedUser = await model.findOne({ email })
        if (alreadyCreatedUser) throw new Error("Email Already Exists");
        const hashed = await bycrypt.hash(password, 10);
        const user = await model.create({
            fullname,
            password: hashed,
            email
        })
        const token = signToken(user._id);
        res.status(201).json({ userId: user._id, user: { fullname, email }, token });
    } catch (err) {
        res.status(404).json(err.message)
    }
}


const login = async (req, res) => {
    try {
        const { fullname, password } = req.body;
        if (!fullname) {
            throw new Error("Please Enter Fullname")
        }
        if (!password) {
            throw new Error("Please Enter Password")
        }
        const user = await model.findOne({ fullname });

        if (!user) throw new Error("User Not Found");
        // Validation User Password
        if (await bycrypt.compare(password, user.password)) {
            // Creating web token
            let token = signToken(user._id);
            const { fullname, email } = user
            res.status(200).json({ userId: user._id, user: { fullname, email }, token });
        } else {
            throw new Error("Invalid Password");
        }
    } catch (err) {
        res.status(404).json(err)
    }
}



module.exports = { signUp, login }