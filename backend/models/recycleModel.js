// import { model } from "mongoose";
// import { noteSchema } from "./noteSchema"
const mongoose = require("mongoose")
const noteSchema = require("./noteSchema")
const recycleSchema = noteSchema;
module.exports = mongoose.model("recycle", recycleSchema)
