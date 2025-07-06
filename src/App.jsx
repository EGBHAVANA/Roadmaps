import react from 'react';
import './index.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import StartHere from "./components/StartHere.jsx";
import Teams from "./components/Teams.jsx";
import Ai from "./components/AiTutor.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import Frontend from "./components/frontend/Frontend.jsx";
import Backend  from "./components/backend/Backend.jsx";
import Devops from './components/devops/Devops.jsx'; 

function App() {

  return (
    <>
        < Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path='/get-started' element = {<StartHere />} />
        <Route path='/ai' element = {<Ai />} />
        <Route path='/teams' element = {<Teams />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/devops" element={<Devops />} />  
      </Routes>
    </>
  )
}

export default App
