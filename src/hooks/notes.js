import { useState } from "react";
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
        selectColor
    }

}