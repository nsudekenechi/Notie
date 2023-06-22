import { useState } from "react"


// Custom Hook for switching dark/light mode
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
    const onFocus = (e) => {
        setFocus(e.target.value != "" ? false : false)
    }
    const onBlur = (e) => {
        setFocus(e.target.value != "" ? false : true)
    }

    return {
        focus,
        onFocus,
        onBlur,
        translateY: focus ? "60%" : 0,
        border: focus ? "0.1px solid rgba(0,0,0,.2)" : "0.1px solid #54428E",
        errorBorder: "0.1px solid red"

    }
}
export const useAnimateSlide = () => {
    const [slide, setSlide] = useState(0)


    const slideAnimation = {
        init: {
            opacity: 0,
            scale: 0.1,
            borderRadius: "50%",
        },
        animate: {
            opacity: 1,
            scale: 0.7,
            borderRadius: "0%",

        },
    }
    const onSlide = (index) => {
        setSlide(index)
    }

    return { slide, onSlide, slideAnimation }
}



export const useShow = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show)
    }
    return { show, toggleShow }
}

// export const useNote = (data) => {
//     // Spreading the items coming from the data, so we can add our own custom properties
//     const [notes, setNotes] = useState(
//         [...data].map((item) => ({ ...item, isClicked: false }))
//     );
    // const handleClick = (id, prop) => {
    //     const newNotes = [...notes].map((item) => {

    //         if (item.id === id) {
    //             item[prop] = true;
    //         } else {
    //             item[prop] = false
    //         }

    //         return item;
    //     });
    //     setNotes(newNotes);
    // };

//     return { notes, handleClick }
// }