import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { navigate } from 'react-router-dom';

const API ="http://localhost:3000";

function TransactionDetails(){
    const [transaction, setTransaction] = useState([]);
    
    const { id } = useParams();
    

    useEffect(() => {
        fetch(`{API}/transactions/${id}`)
        .then(response => response.json())
        .then(transaction => {
            setTransaction(transaction)
        })
        .catch((err) => console.error(err))
    }, [index]);

    const handleDelete = () => {

        const httpOptions = {"method": "DELETE"}

        fetch(`${API}/transactions/${index}`, httpOptions)
        .then((res) => {
           navigate('/transactions'); 
        })
        .catch((err) => console.error(err))
    }
}
return (
    <div className="indexNavigation">
        <div> 
            <Link to={`/transactions`}>
                <button>Return</button>
            </Link>
            <div> 
         <Link to={`/transactions/${index}/edit`}>
         <button>Edit</button>
         </Link>
         </div>
         </div>
    </div>
    
)
export default TransactionDetails;