import {Link} from "react-router-dom";

export default function NavBar(){
    return (
        <div>
            <nav>
                <h3>
<Link to="/transactions">Transactions</Link>
                </h3>
                <button>
                    <Link to="/transactions/new"> New Budget Entry</Link>
                </button>
                
            </nav>
        </div>
    )
}