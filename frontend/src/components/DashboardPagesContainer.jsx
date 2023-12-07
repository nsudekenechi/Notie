import React, { useContext, useEffect } from 'react'
import { AddButton } from './DashboardAddButton'
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { useNote } from '../hooks/notes';
export const DashboardPagesContainer = ({ children }) => {
    const location = useLocation()
    let splitPath = location.pathname.split("/")
    const { getNotes, loading } = useNote();
    useEffect(() => {
        if (location.pathname.split("/").length == 3) getNotes();
    }, [location.pathname]);
    return (
        <div className={` relative ${splitPath.length == 3 ? "p-5 lg:p-10" : ""} `} >
            <AnimatePresence>
                <motion.div exit={{ opacity: 0 }}>
                    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
                        {!loading ? children : <span className='loading loading-spinner loading-lg bg-purple-600 absolute left-[50%] top-[50%] translate-y-[-50%]'></span>}


                    </div>
                    {splitPath.length == 3 && splitPath[2] == "note" && <AddButton />}

                </motion.div>
            </AnimatePresence>

            <ToastContainer />
        </div>
    )
}

