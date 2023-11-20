import "regenerator-runtime/runtime";
import { useState, useEffect, useContext } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { notesContext } from "./context";
import { Colors } from "./data"
import { createInDB, getFromDB, updateDB, deleteFromDB } from "../Api/api";
import { useNavigate } from "react-router-dom";
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

    const { setNotes, notes, user } = useContext(notesContext);
    const [err, setError] = useState("");
    const navigate = useNavigate()
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`,
            "content-type": "application/json"
        }
    }


    // Function that flips props from true to false, also takes params to closeoption if note option is open
    const Flip = (id, prop, flip, closeOption) => {
        const newItems = [...notes].map((item) => {
            if (item._id === id) {
                item[prop] = flip ? !item[prop] : true;
                closeOption ? item.isOption = false : "";//Closing Option Box

            } else {
                if (prop != "isPinned") item[prop] = false;
            }

            return item;
        });
        return newItems;
    }


    const handleFlip = (id, prop, flip, closeOption) => {
        const newNotes = Flip(id, prop, flip, closeOption)

        // Updating DB only when item is not clicked / option is not clicked
        if (prop != "isClicked" && prop != "isOption") {

            let newItem = [...newNotes].filter(item => item._id == id).find(item => item._id == id);
            //Removing isClicked and Option before updating/pushing item to DB
            // delete newItem.isClicked;
            // delete newItem.isOption;
            // Update In DB
            updateDB(`${url}${id}`, newItem);
        }
        setNotes(newNotes);
    };

    const handleUnclick = () => {
        setNotes(prev => {
            return prev.map(item => {
                item.isClicked = false
                item.isOption = false
                return item;
            })
        })
    }

    // Getting Notes
    const getData = () => {
        getFromDB("notes", config).then(notes => {
            setNotes(notes)

        }).catch(err => {
            console.log(err.response.data.error)
        })
    }
    // Creating a note
    const handleCreateNote = (note) => {
        // // Creating note inside of DB
        createInDB("notes", note, config).then(note => {
            // setNotes(prev => [...prev, note])
            navigate("/dashboard/addnew");
            console.log(note)
        }).catch(err => {
            console.log(err.response.data.message)
            setError(err.response.data.message)
        })
        // // Creating note inside of state
        // setNotes(prev => [...prev, {
        //     ...note,
        //     isClicked: false,
        //     isOption: false,
        // }])
    }

    // Deleting a note
    const handleDeleteNote = (id) => {
        // Deleting From DB
        deleteFromDB(`${url}${id}`);
        // Deleting From State
        setNotes(prev => [...prev].filter(item => item._id != id))

    }

    // Updating a note
    const handleUpdateNote = (note, id) => {
        // Updating in DB
        updateDB(`${url}${id}`, note);
        // Updating in State
        setNotes(prev => {
            return [...prev].map(item => {
                if (item._id == id) {
                    item.title = note.title;
                    item.subtitle = note.subtitle;
                    item.color = note.color;
                }
                return item;
            })
        })

    }
    return { getData, handleUpdateNote, handleCreateNote, handleFlip, handleDeleteNote, handleUnclick, err }


}
