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

