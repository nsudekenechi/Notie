import { useState } from "react"

// export const useBorder = (mode) => {
//     return mode ? "border-white" : "border-black"
// }

export const useStyle = () => {
    const [darkmode, setDarkMode] = useState(false)
    const toogleMode = () => {
        setDarkMode(!darkmode)
    }
    // const borderColor = darkmode ? "border-white" : "border-black";
    // const bodyColor = darkmode ? "bg-black text-white" : "bg-white text-black";

    return {
        mode: darkmode,
        toogleMode,
        borderColor: darkmode ? "border-white" : "border-black",
        borderColor2: darkmode ? "border-black" : "border-white",
        bodyColor: darkmode ? "bg-black text-white" : "bg-white text-black"
    }
}

// export const useSwiper = () => {
//     const pagination = {
//         clickable: true,
//         renderBullet: () => <div className="w-4 h-4 rounded-full p-1 flex justify-center items-center border border-[#54428E]">
//             <span className="w-[100%] h-[100%] block rounded-full bg-[#54428E]"></span>
//         </div>
//     }
//     return {
//         pagination
//     }
// }