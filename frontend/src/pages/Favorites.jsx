import React, { useContext } from 'react'
import { notesContext } from '../hooks/context'
import { Note } from '../components/Note'
import { useNote } from '../hooks/notes'
const Favorites = () => {
    const { notes } = useContext(notesContext);
    const { loading } = useNote()
    const favorites = notes.filter(item => item.isFavorite && !item.isArchive);
    return (
        <>
            {favorites.map(
                (item) => item?.isFavorite && !item?.isArchive && <Note data={item} key={item?._id} />

            )}
        </>
    )
}

export default Favorites