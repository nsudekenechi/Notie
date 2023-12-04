import React, { useContext } from 'react'
import { notesContext } from '../hooks/context'
import { Note } from '../components/Note'
const Archived = () => {
    const { notes } = useContext(notesContext)
    if (localStorage.getItem("options")) {
        let options = JSON.parse(localStorage.getItem("options"))
        localStorage.setItem("options", JSON.stringify({ ...options, archive: false }))
    }
    return (
        <>
            {notes.map(
                (item) => item?.isArchive && <Note data={item} key={item?._id} />

            )}

        </>
    )
}

export default Archived