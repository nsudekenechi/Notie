const mongoose = require("mongoose");

const noteSchema = require("./noteSchema")

module.exports = mongoose.model("note", noteSchema);