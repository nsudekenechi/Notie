// import { model } from "mongoose";
// import { noteSchema } from "./noteSchema"
const mongoose = require("mongoose")
const noteSchema = require("./noteSchema")
const recycleSchema = mongoose.Schema({
    title: String,
    subtitle: String
});
module.exports = mongoose.model("recycle", recycleSchema)
