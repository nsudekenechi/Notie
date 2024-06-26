import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { notesContext } from "./hooks/context";
import { CreateNote } from "./pages/CreateNote";
import { AddNew } from "./pages/AddNew";
import { ViewNote } from "./components/ViewNote";
import Archived from './pages/Archived';
import Logout from './pages/Logout';
import Favorites from './pages/Favorites';
import Recycle from './pages/Recycle';


function App() {
  const [notes, setNotes] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")) || JSON.parse(localStorage.getItem("user")) || null);
  const [recycleBin, setRecycleBin] = useState([]);
  const noteColor = {
    color: ["blue", "green", "orange"],
    bg: ["bg-blue-600/20", "bg-green-600/20", "bg-orange-600/20"],
    audio: ["bg-blue-600", "bg-green-600", "bg-orange-600"],
    text: ["text-blue-600", "text-green-600", "text-orange-600"]
  };

  return (
    <>
      <notesContext.Provider value={{ notes, setNotes, user, setUser, searchedNotes, setSearchedNotes, recycleBin, setRecycleBin, noteColor }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={user ? <Navigate to={"/dashboard/note"} /> : <Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={!user ? <Navigate to={"/login"} /> : <Dashboard />} >
              <Route path="note"  >
                <Route path='' element={<AddNew />} />
                <Route path="createnote" element={<CreateNote />} />
                <Route path="viewnote/:id" element={<ViewNote />} />
                <Route path="editnote/:id" element={<CreateNote />} />
              </Route>

              <Route path='archived' element={<Archived />} />
              <Route path='favorites' element={<Favorites />} />
              <Route path='recycle' element={<Recycle />} />
              <Route path='logout' element={<Logout />} />
            </Route>
          </Routes>
        </Router>
      </notesContext.Provider>
    </>
  );
}

export default App;
