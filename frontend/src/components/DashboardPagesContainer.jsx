import React, { useContext } from 'react'
import { AddButton } from './DashboardAddButton'
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"
const DashboardPagesContainer = ({ children, loading }) => {
    const location = useLocation()
    let splitPath = location.pathname.split("/")
    console.log(splitPath)
    return (
        <div className={`min-h-screen relative ${splitPath.length == 3 ? "p-10" : ""} `} >
            {!loading ? <>
                <AnimatePresence>
                    <motion.div exit={{ opacity: 0 }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
                            {children}
                        </div>
                        {splitPath[2] == "note" && <AddButton />}
                        
                    </motion.div>
                </AnimatePresence>

            </> : <span className='loading loading-spinner loading-lg bg-purple-600 absolute left-[50%] top-[50%]'></span>}
        </div>
    )
}

export default DashboardPagesContainer