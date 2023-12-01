const express = require("express");
const router = express.Router()
const { getNotes, createNote, updateNote, deleteNote, getRecycledNotes, deleteRecycledNote, deleteRecycledNotes, restoreRecycledNote } = require("../controllers/noteController")

router.route("/").get(getNotes).post(createNote).patch(updateNote).delete(deleteNote)
router.route("/recycle").get(getRecycledNotes).delete(deleteRecycledNotes)

router.route("/recycle/:id").delete(deleteRecycledNote).post(restoreRecycledNote);
module.exports = router