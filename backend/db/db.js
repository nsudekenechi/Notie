const mongoose = require("mongoose")

const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN)
        console.log("Connected Successfully...")
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = DB;