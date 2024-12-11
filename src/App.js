import Timer from "./Components/Timer";
import Hour from "./Components/Hour";
import Minute from "./Components/Minutes";
import {Route, Routes, Link, NavLink} from 'react-router-dom'
import './index.css'
function App() {
  return (
    <div className="App">
      <div className="link">
        <NavLink to="/hour">Hour</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/minute">Minute</NavLink>
      </div>

      <Routes>
        <Route path="/hour" element={<Hour />} />
        <Route path="/minute" element={<Minute />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
