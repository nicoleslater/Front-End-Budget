import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(){
    return (
        <div>
        <nav>
                <div>
                
                <Link to={`/`}>Home</Link>
            
                </div>
         <div>
            <Link to={`/transactions`}>
            <button>Transactions</button>
            </Link>
        </div>
        <div>
            <Link to={`/transactions/:id`}>
            <button>Recent Transactions</button>
            </Link>
        </div>
                
            </nav>
        </div>
    );
}