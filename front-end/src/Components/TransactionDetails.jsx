import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { navigate } from 'react-router-dom';

const API ="http://localhost:3000";

function TransactionDetails(){
    const [transaction, setTransaction] = useState([]);
    
    const { id } = useParams();
    

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setTransaction(responseJSON)
        })
        .catch(error => console.log(error))
    }, [id, API])
    

    const handleDelete = () => {
        deleteTransaction()
    }

    const deleteTransaction = () => {
        const httpOptions = { method: "DELTE" }
        fetch(`${API}/transactions/${id}`, httpOptions)
        .then(() => navigate(`/transactions`))
        .catch(error => console.log(error))
    }
   

return (
    <article>
    <div className="showNavigation">
        <div> 
            <Link to={`/transactions`}>
                <button>Return</button>
            </Link>
            <div> 
         <Link to={`/transactions/${id}/edit`}>
         <button>Edit</button>
         </Link>
         </div>
         <button onClick={handleDelete}>Delete</button>
         </div>
    </div>
    <div className="transaction">
        <div>
            <span className="label">{transaction.item_name}Item Name:</span>
        </div>
    </div>
    </article>
    
)
}

export default TransactionDetails;