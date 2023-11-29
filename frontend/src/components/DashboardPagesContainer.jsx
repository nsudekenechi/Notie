import React, { useContext } from 'react'
import { notesContext } from '../hooks/context'
import { TbMoodEmpty } from 'react-icons/tb'
import { AddButton } from './DashboardAddButton'

const DashboardPagesContainer = ({ children }) => {
    const { notes } = useContext(notesContext)

    return (
        <div className="md:px-10 min-h-screen py-10 " >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
                {children}
            </div>
            {/* {notes.length == 0 && <div className="h-[60vh] flex items-center justify-center flex-col">
                <TbMoodEmpty size={50} className="text-red-500" />
                <p className="text-lg text-purple-600">You don&apos;t have any notes yet</p>
                <p className="text-sm italic text-gray-300">Tap the add button to create one</p>
            </div>
            } */}
            <AddButton />
        </div>
    )
}

export default DashboardPagesContainer