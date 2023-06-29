const express = require("express");
const router = express.Router()
const { getNotes } = require("../controllers/noteController")
router.route("/").get(getNotes)
// router.route("/:id").patch().delete()

module.exports = router