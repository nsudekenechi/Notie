const mongoose = require("mongoose")
function generateRand() {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let random = "";
    for (let i = 0; i < 6; i++) {
        random += characters[Math.floor(Math.random() * characters.length)]
    }
    return random;
}
const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    subtitle: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        default: new Date().toLocaleString("en-us", { dateStyle: "long" })
    },
    isArchive: {
        type: Boolean,
        required: true,
        default: false,
    },
    isFavorite: {
        type: Boolean,
        required: true,
        default: false,

    },
    isPinned: {
        type: Boolean,
        required: true,
        default: false,

    },
    color: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
   
})
module.exports = noteSchema