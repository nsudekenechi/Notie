const mongoose = require("mongoose");

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

module.exports = mongoose.model("note", noteSchema);