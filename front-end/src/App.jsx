import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/Four0Four";
import Header from "./Components/Header";

import NavBar from "./Components/NavBar";

function App() {



  return (
      <div className="App">
        <Header />
        <Router>
        <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Index />} /> 
              <Route path="/transactions/new" element={<New />} />
              <Route exact path="/transactions/:id" element={<Show />} />
              <Route path="/transactions/:id/edit" element={<Edit />} /> 
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
        </div>
  
  );
}

export default App;
