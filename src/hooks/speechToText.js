import "regenerator-runtime/runtime";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export const useSpeech = (commands) => {
    const { transcript } = useSpeechRecognition({ commands })

    return {
        transcript,
        start: SpeechRecognition.startListening,
        stop: SpeechRecognition.stopListening
    }

}