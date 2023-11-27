import React, { useContext } from 'react'
import DashboardPagesContainer from '../components/DashboardPagesContainer'
import { notesContext } from '../hooks/context'
import { Note } from '../components/Note'
import { TbMoodEmpty } from 'react-icons/tb'
const Favorites = () => {
    const { notes } = useContext(notesContext)
    console.log(notes)
    return (
        <>
            <DashboardPagesContainer>
                {notes.map(
                    (item) => item?.isFavorite  && !item?.isArchive && <Note data={item} key={item?._id} />

                )}
                {!notes.some(item => item?.isFavorite) && <div className=" flex items-center justify-center flex-col col-span-6 h-[60vh]">
                    <TbMoodEmpty size={50} className="text-red-500" />
                    <p className="text-lg text-purple-600">You don&apos;t have any Favorite notes yet</p>
                    <p className="text-sm italic text-gray-300">Please Favorite a note</p>
                </div>
                }
            </DashboardPagesContainer>

        </>
    )
}

export default Favorites