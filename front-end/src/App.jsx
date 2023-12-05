import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

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
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </main>
   </Router>
    </div>
  );
}

export default App;
