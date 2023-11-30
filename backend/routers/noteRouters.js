const express = require("express");
const router = express.Router()
const { getNotes, createNote, updateNote, deleteNote, getRecycledNotes } = require("../controllers/noteController")

router.route("/").get(getNotes).post(createNote).patch(updateNote).delete(deleteNote)
router.route("/recycle").get(getRecycledNotes)
module.exports = router