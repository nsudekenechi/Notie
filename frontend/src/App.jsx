// Import Swiper styles
// import 'swiper/';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { notesContext } from "./hooks/context";
import { CreateNote } from "./pages/CreateNote";
import { AddNew } from "./pages/AddNew";
import { ViewNote } from "./components/ViewNote";
// import { EditNote } from "./components/EditNote";
function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user") )|| null);
  
  return (
    <>
      <notesContext.Provider value={{ notes, setNotes, user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={user ? <Navigate to={"/dashboard/addnew"} /> : <Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={!user ? <Navigate to={"/login"} /> : <Dashboard />} >
              <Route path="createnote" element={<CreateNote />} />
              <Route path="addnew" element={<AddNew />} />
              <Route path="viewnote/:id" element={<ViewNote />} />
              <Route path="editnote/:id" element={<CreateNote />} />
            </Route>
          </Routes>
        </Router>
      </notesContext.Provider>
    </>
  );
}

export default App;
