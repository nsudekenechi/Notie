const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    date: String,
    isArchive: Boolean,
    isFavorite: Boolean,
    isPinned: Boolean,
    color: String,
})

module.exports = mongoose.model("note", noteSchema);