import "regenerator-runtime/runtime";
import { useState, useEffect, useContext } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { notesContext } from "./context";
import { Colors } from "./data"
import { createInDB, getFromDB, updateDB, deleteFromDB } from "../Api/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
export const useSpeech = (isListening) => {
    const { transcript, resetTranscript } = useSpeechRecognition()

    // Playing Speech
    useEffect(() => {
        if (isListening) {
            SpeechRecognition.startListening({ continuous: true })

        } else {
            resetTranscript();
            SpeechRecognition.stopListening()
        }
    }, [isListening]);
    return {
        transcript,
        resetTranscript
    }

}

export const useInputs = (Inputs, transcript, resetTranscript) => {
    const [inputs, setInputs] = useState(Inputs);
    const [focusedInput, setFocusedInput] = useState("");
    const [redo, setRedo] = useState([])
    // Function that handles  value of input when changed
    const inputChanged = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
    // Function that handles when Input is Focused, so we can know the input to display the speechToText transcript
    const handleFocus = (e) => {
        setFocusedInput(e.target.name);
        resetTranscript()
    };


    const handleUndo = () => {
        let undo = inputs[focusedInput].split(" ");
        //Removing the last item from the array, to undo... 
        let removed = undo.pop();

        setInputs({ ...inputs, [focusedInput]: undo.join(" ") });
        //Focus On Input after clicking elsewhere
        document.querySelector(`[name='${focusedInput}']`).focus();
        // Storing Removed Text as our redo
        setRedo(prev => [...prev, removed])
    }
    const handleRedo = () => {
        if (redo.length > 0) {
            let redoText = redo[redo.length - 1];

            setInputs({ ...inputs, [focusedInput]: `${inputs[focusedInput]} ${redoText}` });
            setRedo(prev => prev.filter(item => item != redoText));
        }
        //Focus On Input after clicking elsewhere
        document.querySelector(`[name='${focusedInput}']`).focus();
    }
    // Changing Input value when user is talking
    useEffect(() => {
        if (transcript) {
            setInputs({ ...inputs, [focusedInput]: transcript });
        }
    }, [transcript]);

    return { handleRedo, handleUndo, inputChanged, handleFocus, inputs, focusedInput, redo }
}
export const useColors = () => {
    const [colors, setColors] = useState(Colors);
    const selectColor = (id) => {
        const newColors = [...colors].map((item, index) => {
            if (id == index) {
                item.selected = true;
            } else {
                item.selected = false;
            }
            return item;
        })
        setColors(newColors)
    }
    return {
        colors,
        selectColor,

    }
}
export const handleArrowAnimation = (type) => ({
    tap: type ? { scale: 1.1, y: -3 } : {},
    initial: { opacity: 0.2 },
    animate: { opacity: type ? 1 : 0.2 },
});
export const useNote = () => {

    const { setNotes, notes, user, setSearchedNotes } = useContext(notesContext);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`,
            "content-type": "application/json"
        }
    }


    // Getting Notes
    const getNotes = () => {
        setLoading(true)
        getFromDB("notes", config).then(notes => {
            let newNotes = notes.map(item => ({
                ...item, isClicked: false,
                isOption: false
            }))
            // Storing notes
            setNotes(newNotes)
            // Storing notes in a container incase they're been searched
            setSearchedNotes(newNotes);
        }).catch(err => {
            toast.error(err.response.data.error)
        }).finally(() => {
            setLoading(false)
        })
    }
    // Creating a note
    const handleCreateNote = (note) => {
        setLoading(true);
        // // Creating note inside of DB
        createInDB("notes", note, config).then(note => {
            let updatedNotes = [...notes, {
                ...note,
                isClicked: false,
                isOption: false,
            }]
            // // Creating note inside of state
            setNotes(updatedNotes)
            setSearchedNotes(updatedNotes);

            navigate("/dashboard/note");
        }).catch(err => {
            setLoading(false);
            // setError(err.response.data.message)
            toast.warn(err.response.data.message)
        }).finally(() => {
            setLoading(false);

        })

    }

    // Updating a note
    const handleUpdateNote = (note) => {
        setLoading(true);
        navigate("/dashboard/note");

        // Updating in DB
        updateDB("notes", note, config).then(e => {
            let updatedNote = notes.map(item => item._id == e._id ? e : item);
            setNotes(updatedNote);
        }).catch(err => {
            toast.error(err.response.data)

        }).finally(() => {
            setLoading(false);

        })


    }

    // Selecting an option for note
    const handleFlip = (id, prop) => {
        let newNotes = notes.map(item => item._id == id ? { ...item, isOption: !item.isOption } : item)
        // CLosing option overlay
        setNotes(newNotes)
        if (prop == "isDelete") {
            newNotes = newNotes.filter(item => item._id != id)
            deleteFromDB(`notes?id=${id}`, config).then().catch(err => {
                toast.warn(err.response.data.message)
            })
        } else if (prop != "isOption") {
            newNotes = newNotes.map(item => item._id == id ? { ...item, [prop]: !item[prop] } : item)
            const { isOption, isClicked, ...note } = newNotes.find(item => item._id == id)
            updateDB("notes", note, config).then().catch(err => {
                toast.warn(err.response.data.message)

            })
            if (note.isArchive) {
                localStorage.setItem("options", JSON.stringify({ archive: true }))
            }

        }

        if (prop != "isOption") {
            setTimeout(() => {
                setNotes(newNotes)
            }, 210)
        } else {
            setNotes(newNotes)
        }
    }

    const handleUnclick = () => {
        setNotes(prev => {
            return prev.map(item => {
                item.isClicked = false
                item.isOption = false
                return item;
            })
        })
    }

    return { getNotes, handleUpdateNote, handleCreateNote, handleFlip, handleUnclick, loading }


}

