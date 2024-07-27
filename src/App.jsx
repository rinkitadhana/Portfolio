import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/project";
import Skills from "./pages/skills";
function App() {
  return (
    < >
    <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/projects" element={<Project/>} /> 
    <Route path="/skills" element={<Skills/>} />  
    </Routes>
     
    </>
  )
}

export default App;