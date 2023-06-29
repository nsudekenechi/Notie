const express = require("express");
const router = express.Router()
const { getNotes, createNote, updateNote } = require("../controllers/noteController")
router.route("/").get(getNotes).post(createNote)
router.route("/:id").patch(updateNote)

module.exports = router