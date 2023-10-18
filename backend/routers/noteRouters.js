const express = require("express");
const router = express.Router()
const { getNotes, createNote, updateNote, deleteNote } = require("../controllers/noteController")

router.route("/").get(getNotes).post(createNote).patch(updateNote).delete(deleteNote)

module.exports = router