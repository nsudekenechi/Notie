import { useContext, useState } from "react"
import { createInDB, deleteFromDB, getFromDB } from "../Api/api"
import { notesContext } from "./context"
import { toast } from 'react-toastify';

export const useRecycleBin = () => {
    const { user, setRecycleBin, recycleBin } = useContext(notesContext)
    const [animateRemove, setAnimateRemove] = useState(null);
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`,
            "content-type": "application/json"
        }
    }

    const getRecycleBin = () => {
        getFromDB("notes/recycle", config).then(res => {

            let notes = res.map(item => ({
                ...item, isClicked: false,
                isOption: false
            }))
            setRecycleBin(notes);

        })
    }

    // Restoring Item from recycle bin
    const restoreRecycledNote = (id) => {
        let recycledNotes = recycleBin.filter(item => item._id != id);
        setRecycleBin(recycledNotes);
        createInDB(`notes/recycle/${id}`, {}, config).then().catch(err => {
            toast.warn(err.response.data.message)
        })
    }
    // Deleting  item from recycle bin
    const deleteRecycleNote = (id) => {
        setAnimateRemove(id)
        let notes = recycleBin.filter(item => item._id != id);
        setTimeout(() => {
            setRecycleBin(notes)
            setAnimateRemove(null)
        }, 100)


        deleteFromDB(`notes/recycle/${id}`, config).then().catch(err => {
            toast.warn(err.response.data.message)
        })

    }

    // Deleting all from items from recycle bin
    const deleteAll = () => {
        // Creating animate for all items
        setAnimateRemove("all")
        setTimeout(() => {
            setRecycleBin([]);
            setAnimateRemove(null)
        }, 1000)

        deleteFromDB(`notes/recycle/`, config).then().catch(err => {
            toast.warn(err.response.data.message)
        })
    }

    return { getRecycleBin, deleteRecycleNote, deleteAll, animateRemove, restoreRecycledNote }
}