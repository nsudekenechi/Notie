import { useState } from "react";
export const useCreateNote = () => {

    const [colors, setColors] = useState([
        {
            color: "bg-purple-600",
            selected: false,
        },
        {
            color: "bg-orange-600",
            selected: false,
        },
        {
            color: "bg-blue-600",
            selected: false,
        },
        {
            color: "bg-red-600",
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