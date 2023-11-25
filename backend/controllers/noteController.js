const model = require("../models/noteModels")

//@desc Getting All Notes
//@route GET api/notes 
const getNotes = async (req, res) => {
    try {
        const notes = await model.find({ user: req.user });
        res.status(200).json(notes)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//@desc Creating Notes
// @route POST api/notes 
const createNote = async (req, res) => {
    try {
        const { title, subtitle, color } = req.body;
        if (title == "" || subtitle == "") throw new Error("Please fill in every field");
        if (color == "") throw new Error("Select a color");
        const createdNotes = await model.create({ ...req.body, user: req.user });
        res.status(201).json(createdNotes)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//@desc Updating Note
// @route Update api/notes
const updateNote = async (req, res) => {
    try {
        if (!req.body._id) {
            throw new Error("Couldn't find note");
        }
        const newNote = await model.findByIdAndUpdate(req.body._id, { ...req.body }, { new: true });
        res.status(200).json(newNote);
    } catch (err) {
        res.status(400).json(err.message)
    }

}

// @desc Deleting Note
// @route Delete api/notes
const deleteNote = async (req, res) => {
    try {
        if (!req.query.id) {
            throw new Error("Couldn't find note");
        }
        await model.findByIdAndDelete({ _id: req.query.id });
        res.status(200).json({ message: "Deleted..." })
    } catch (err) {
        res.status(400).json(err.message)

    }
}
module.exports = { getNotes, createNote, updateNote, deleteNote }