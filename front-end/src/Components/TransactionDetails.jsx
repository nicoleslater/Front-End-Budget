import {React, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function TransactionDetails(){
  const [ transaction, setTransaction ] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/transactions/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setTransaction(responseJSON)
    })
    .catch((error) => console.error('Error fetching transaction:', error))
    .finally(() => setLoading(false));
  }, [id, API])

  const deleteTransaction = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/transactions/${id}`, httpOptions)
      .then(() => navigate(`/transactions`))
      .catch((error) => console.log(error));
  };

  const handleDelete = () => {
    deleteTransaction();
  };

  if(loading){
    return <div>Loading.....thank you for your patience!</div>
  }
  if(!transaction){
    return <div>No transaction found. Please go back. Thank you!</div>
  }

  return (

<div> 
    <article> 
        <h4>{transaction.name}</h4>
        <h4>{transaction.amount}</h4>
        <h4>{transaction.vendor}</h4>
        <h4>{transaction.category}</h4>
        <h4>{transaction.deadline}</h4>
        <h4>{transaction.priority}</h4>
        <div className="navigation"> 
        <div>
        </div>
        <div>
            <Link to={`transactions/new`}>
            <button>Add to Current Budget</button>
            </Link>
        </div>
            <button onClick={handleDelete}>Delete Transaction</button>
        </div>
    </article>
</div>

);

}

export default TransactionDetails;