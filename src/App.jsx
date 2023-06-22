import "swiper/swiper-bundle.min.css";

import "./assets/styles/App.css";
import "./assets/styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { useState } from "react";
import { notesContext } from "./hooks/context";

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  return (
    <>
      <notesContext.Provider value={{ notes, setNotes }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard/:page" element={<Dashboard />} />
          </Routes>
        </Router>
      </notesContext.Provider>
    </>
  );
}

export default App;
