const express = require("express");
const router = express.Router()
const { getNotes, createNote } = require("../controllers/noteController")
router.route("/").get(getNotes).post(createNote)
// router.route("/:id").patch().delete()

module.exports = router