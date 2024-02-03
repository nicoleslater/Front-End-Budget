import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div className="nav-container">
        <div className="nav-item">
          <Link to={`/`} style={{ textDecoration: 'none' }}>Home</Link>
        </div>
        <div className="nav-item">
          <Link to={`/transactions`} style={{ textDecoration: 'none' }}>
            <button>Transactions</button>
          </Link>
        </div>
        <div className="nav-item">
          <Link to={`/goals`} style={{ textDecoration: 'none' }}>
            <button>Goals</button>
          </Link>
        </div>
      </div>
      
    );
}