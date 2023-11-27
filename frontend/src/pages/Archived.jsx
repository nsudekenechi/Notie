import React, { useContext } from 'react'
import DashboardPagesContainer from '../components/DashboardPagesContainer'
import { notesContext } from '../hooks/context'
import { Note } from '../components/Note'
import { TbMoodEmpty } from 'react-icons/tb'
const Archived = () => {
    const { notes } = useContext(notesContext)
    console.log(notes.some(item => item.isArchive))
    return (
        <>
            <DashboardPagesContainer>
                {notes.map(
                    (item) => item?.isArchive && <Note data={item} key={item?._id} />

                )}
                {notes.some(item => !item.isArchive) && <div className=" flex items-center justify-center flex-col col-span-6 h-[60vh]">
                <TbMoodEmpty size={50} className="text-red-500" />
                <p className="text-lg text-purple-600">You don&apos;t have any archived notes yet</p>
                <p className="text-sm italic text-gray-300">Please Archive a note</p>
            </div>
            }
            </DashboardPagesContainer>
            
        </>
    )
}

export default Archived