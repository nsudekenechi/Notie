import React, { useContext, useEffect } from 'react'
import DashboardPagesContainer from '../components/DashboardPagesContainer'
import { useRecycleBin } from '../hooks/recycleBin'
import { notesContext } from '../hooks/context'
import { ImBin } from "react-icons/im";
import { GoDash, GoTrash } from "react-icons/go";
import { RiRefreshLine } from "react-icons/ri";
import { ToastContainer } from 'react-toastify';
import { motion } from "framer-motion"
const Recycle = () => {
  const { recycleBin } = useContext(notesContext)
  const { getRecycleBin, deleteRecycleNote, deleteAll, animateRemove, restoreRecycledNote } = useRecycleBin()
  const colors = {
    colorNames: ["blue", "green", "orange"],
    bgColor: ["bg-blue-600", "bg-green-600", "bg-orange-600"]
  }
  useEffect(() => {
    getRecycleBin()
  }, [])
  return (
    <>
      <DashboardPagesContainer>
        {recycleBin.length > 1 && <p className='flex items-center justify-end cursor-pointer gap-x-2  col-span-6' onClick={deleteAll}>Delete all <GoTrash /></p>}
        <ul className='col-span-6 overflow-x-hidden py-2'>
          {recycleBin.map((data, index) => (

            <motion.li key={index} className={`mb-5 border rounded-2xl  grid grid-cols-12 gap-x-5 p-3 items-center`} initial={{ translateY: 0, translateX: "0%" }} whileHover={{ translateY: 3, transition: { duration: 0.5 } }} animate={{
              translateX: animateRemove == data._id || animateRemove == "all" ? "100%" : "0%",
              opacity: animateRemove == data._id || animateRemove == "all" ? "0" : "1",
              transition: { duration: 0.5, delay: animateRemove == "all" ? (index / 10) + 0.01 : 0 }
            }} >

              <div className={`h-8 w-8 text-white  flex items-center justify-center rounded-full ${colors.bgColor[colors.colorNames.findIndex(item => item == data.color)]}`} >
                <ImBin size={13} />
              </div>

              <div className="col-span-10">
                <h1 className='text-lg font-bold'>{data.title.slice(0, 60)}{data.title.length >= 60 && "..."}</h1>
                <p className='text-xs'>{data.date}</p>
              </div>
              <div className='flex items-center justify-center gap-x-3'>
                <GoDash color='red' size={20} className='cursor-pointer' onClick={() => deleteRecycleNote(data._id)} />
                <RiRefreshLine color='green' size={20} className='cursor-pointer' onClick={() => restoreRecycledNote(data._id)} />
              </div>
            </motion.li>
          ))}
        </ul>
        <ToastContainer />
      </DashboardPagesContainer>
    </>
  )
}

export default Recycle