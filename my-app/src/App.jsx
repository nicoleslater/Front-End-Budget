import logo from './logo.svg';
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
