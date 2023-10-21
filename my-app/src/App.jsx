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
        <Route path="/transactions" element={<Index />}/>
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:index" element={<Show />} />
        <Route path="/transactions/:index/edit" element={<Edit />} />
      </Routes>
    </main>
   </Router>
    </div>
  );
}

export default App;
