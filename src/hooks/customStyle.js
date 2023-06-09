import { useState } from "react"

// export const useBorder = (mode) => {
//     return mode ? "border-white" : "border-black"
// }

export const useStyle = () => {
    const [darkmode, setDarkMode] = useState(false)
    const toogleMode = () => {
        setDarkMode(!darkmode)
    }


    return {
        mode: darkmode,
        toogleMode,
        borderColor: darkmode ? "border-white" : "border-black",
        borderColor2: darkmode ? "border-black" : "border-white",
        bodyColor: darkmode ? "bg-black text-white" : "bg-white text-black"
    }
}
export const useInput = () => {
    const [focus, setFocus] = useState(true)
    const onFocus = () => {
        setFocus(!focus)
    }
    const onBlur = () => {
        setFocus(!focus)
    }

    return {
        onFocus,
        onBlur,
        translateY: focus ? "50%" : 0,
        border: focus ? "0.1px solid rgba(0,0,0,.2)" : "0.1px solid #54428E",
    }
}
