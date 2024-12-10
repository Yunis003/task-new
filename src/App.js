import About from "./Components/About";
import Contact from "./Components/Contact";
import WorkAbout from "./Components/WorkAbout";
import {Route, Routes, Link, NavLink} from 'react-router-dom'
import './index.css'
function App() {
  return (
    <div className="App">
      <div className="navigation">
      <NavLink to='about'>About</NavLink>
      <NavLink to='contact'>Contact</NavLink>
      <NavLink to='workabout'>About</NavLink>
      </div>


      
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/workabout" element={<WorkAbout/>} />
      </Routes>
    </div>
  );
}

export default App;
