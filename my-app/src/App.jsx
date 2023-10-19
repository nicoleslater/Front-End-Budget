import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
   <Router>
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </main>
   </Router>
    </div>
  );
}

export default App;
