import "regenerator-runtime/runtime";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export const useSpeech = (isListening) => {
    const { transcript, resetTranscript } = useSpeechRecognition()

    // Playing Speech
    useEffect(() => {
        if (isListening) {
            SpeechRecognition.startListening({ continuous: true })
        } else {
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
    const [undoRedo, setUndoRedo] = useState(Inputs)
    const [focusedInput, setFocusedInput] = useState("");


    // Function that handles  value of input when changed
    const inputChanged = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        if (e.nativeEvent.data != null) {
            setUndoRedo({ ...inputs, [focusedInput]: e.target.value })
        }//Saving Data for undo and redo
    };
    // Function that handles when Input is Focused, so we can know the input to display the speechToText transcript
    const handleFocus = (e) => {
        setFocusedInput(e.target.name);
        resetTranscript()
    };

    const handleUndo = () => {
        let undo = inputs[focusedInput].split(" ");
        undo.pop() //Removing the last item from the string
        setInputs({ ...inputs, [focusedInput]: undo.join(" ") })
    }
    // Changing Input value when user is talking
    useEffect(() => {
        if (transcript) {
            setInputs({ ...inputs, [focusedInput]: transcript });
        }
    }, [transcript]);

    return { handleUndo, inputChanged, handleFocus, inputs }
}

export const useCreateNote = () => {

    const [colors, setColors] = useState([
        {
            color: "purple",
            selected: true,
        },
        {
            color: "orange",
            selected: false,
        },
        {
            color: "blue",
            selected: false,
        },
        {
            color: "pink",
            selected: false,
        },
    ]);





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