import React, { useContext, useEffect } from 'react'
import { notesContext } from '../hooks/context'
import { Link, useNavigate } from "react-router-dom"
const Logout = () => {
  const { setUser } = useContext(notesContext)
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
  }, [])
  return (
    <div>
      {/* <Link to={"/login"}>Hii</Link> */}
    </div>
  )
}

export default Logout