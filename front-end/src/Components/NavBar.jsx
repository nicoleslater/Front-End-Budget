import {Link} from "react-router-dom";

export default function NavBar(){
    return (
        <div>
            <nav>
                <h3>
                <Link to="/">Home</Link>
                </h3>
                <button>
                <Link to="/transactions">Transaction List</Link>
                </button>
                
            </nav>
        </div>
    );
}