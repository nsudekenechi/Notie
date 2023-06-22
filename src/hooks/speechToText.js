import "regenerator-runtime/runtime";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export const useSpeech = (isListening, Inputs) => {
    const { transcript, resetTranscript } = useSpeechRecognition()
    const [inputs, setInputs] = useState(Inputs);
    const [undoRedo, setUndoRedo] = useState(Inputs)
    const [focusedInput, setFocusedInput] = useState("");


    // Function that handles when value of input changes
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
    // Playing Speech
    useEffect(() => {
        if (isListening) {
            SpeechRecognition.startListening({ continuous: true })
            setInputs({ ...inputs, [focusedInput]: transcript });
        } else {
            SpeechRecognition.stopListening()
        }
    }, [isListening, transcript]);
    return {
        transcript,
        inputChanged,
        handleFocus,
        inputs,
        undoRedo
    }

}