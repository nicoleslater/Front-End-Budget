import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div class="nav-container">
        <div class="nav-item">
          <Link to={`/`} style={{ textDecoration: 'none' }}>Home</Link>
        </div>
        <div class="nav-item">
          <Link to={`/transactions`} style={{ textDecoration: 'none' }}>
            <button>Transactions</button>
          </Link>
        </div>
        <div class="nav-item">
          <Link to={`/transactions/:id`} style={{ textDecoration: 'none' }}>
            <button>Recent Transactions</button>
          </Link>
        </div>
      </div>
      
    );
}