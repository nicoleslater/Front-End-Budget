import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <div>
            <nav>
                <h3>
                <Link to={`/`}>Home</Link>
                </h3>
                <div>
            <Link to={`transactions/new`}>
            <button>Add Budget Transaction</button>
            </Link>
        </div>
        <div>
            <Link to={`transactions/:id`}>
            <button>Recent Transactions</button>
            </Link>
        </div>
                
            </nav>
        </div>
    );
}