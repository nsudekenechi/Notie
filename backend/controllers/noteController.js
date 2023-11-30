const model = require("../models/noteModels")
const recycleModel = require("../models/recycleModel")

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
        let note = await model.findById({ _id: req.query.id })
        note.$isNew = true;
        // Adding note to recycle
        await recycleModel.create(note)
        // Deleting note...
        await model.findByIdAndDelete({ _id: req.query.id });
        res.status(200).json(note)
    } catch (err) {
        res.status(400).json(err.message)

    }
}

// getting recycled notes
//@route GET api/notes/recycle
const getRecycledNotes = async (req, res) => {
    try {
        const recycledNotes = await recycleModel.find();
        res.status(200).json(recycledNotes)
    } catch (err) {
        res.status(404).json(err.message)
    }
}



// deleting recycled note
// @route DELETE api/notes/recycle/:id
const deleteRecycledNote = async (req, res) => {
    try {
        if (!req.params.id) throw new Error("Could'nt find note")
        await recycleModel.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ message: "Deleted" })
    } catch (err) {
        res.status(404).json(err.message)
    }
}
// deleting all recycled notes
// @route DELETE api/notes/recycle
const deleteRecycledNotes = async (req, res) => {
    try {
        await recycleModel.deleteMany({})
        res.status(200).json({ message: "Deleted" })
    } catch (err) {
        res.status(404).json(err.message)
    }

}

module.exports = { getNotes, createNote, updateNote, deleteNote, getRecycledNotes, deleteRecycledNote, deleteRecycledNotes }