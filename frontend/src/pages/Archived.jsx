import React, { useContext } from 'react'
import DashboardPagesContainer from '../components/DashboardPagesContainer'
import { notesContext } from '../hooks/context'
import { Note } from '../components/Note'
const Archived = () => {
    const { notes } = useContext(notesContext)
    return (
        <>
        {notes.map(
            (item) => item?.isArchive && <Note data={item} key={item?._id} />

        )}

        </>
    )
}

export default Archived