const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    date: Date,
    archived: Boolean,
    favorite: Boolean,
    pinned: Boolean
})

module.exports = mongoose.model("note", noteSchema);