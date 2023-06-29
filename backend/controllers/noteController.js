const model = require("../models/noteModels")

// Getting All Notes
//@route GET api/notes 
const getNotes = async (req, res) => {
    try {
        const notes = await model.find();
        res.status(200).json(notes)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Creating Notes
// @route POST api/notes 
const createNote = async () => {
    try {

    } catch (err) {
        res.status()
    }
}
module.exports = { getNotes }