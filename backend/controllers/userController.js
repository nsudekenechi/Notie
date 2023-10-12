const model = require("../models/userModel")
const bycrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const signToken = (id)=>{
  let token = jwt.sign({id},process.env.JWT_SECRETKEY);
  return token;
}
const signUp = async (req, res) => {
    try {
        const { fullname, password, email } = req.body;
        const hashed = await bycrypt.hash(password, 10);
        const user = await model.create({
            fullname,
            password: hashed,
            email
        })
        const token = signToken(user._id);
        res.status(201).json({user:user._id,token});
    } catch (err) {
        res.status(404).json(err.message)
    }
}


const login = async (req, res) => {
    try {
        const { fullname, password } = req.body;
        const user = await model.find({ $or: [{ fullname }, { email: fullname }] });
        if (!user) return res.status(404).json({ message: "User not found" });


        if (await bycrypt.compare(password, user[0].password)) {
            // Creating web token
            let token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY);
            res.status(200).json(user[0],token);


        } else {
            res.status(404).json({ message: "Invalid Password" })
        }
    } catch (err) {
        res.status(404).json(err.message)
    }
}

module.exports = { signUp, login }