const model = require("../models/noteModels")

//@desc Getting All Notes
//@route GET api/notes 
const getNotes = async (req, res) => {
    try {
        const notes = await model.find();
        res.status(200).json(notes)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//@desc Creating Notes
// @route POST api/notes 
const createNote = async (req, res) => {
    try {
        // const { title, subtitle, date } = req.body
        const createdNotes = await model.create({ ...req.body });
        res.status(201).json(createdNotes)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//@desc Updating Note
// @route Update api/notes
const updateNote = async (req, res) => {
    try {
        const id = req.params.id
        const newNote = await model.findByIdAndUpdate(id, { ...req.body }, { new: true });
        res.status(200).json(newNote);
    } catch (err) {
        res.status(400).json(err.message)
    }

}

// @desc Deleting Note
// @route Delete api/notes
const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        await model.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted..." })
    } catch (err) {
        res.status(400).json(err.message)

    }
}
module.exports = { getNotes, createNote, updateNote, deleteNote }