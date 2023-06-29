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
const createNote = async (req, res) => {
    try {
        const { title, subtitle, date } = req.body
        const createdNotes = await model.create({
            title,
            subtitle,
            date,
            archived: false,
            favorite: false,
            pinned: false
        });
        res.status(201).json(createdNotes)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// Updating Note

module.exports = { getNotes, createNote }