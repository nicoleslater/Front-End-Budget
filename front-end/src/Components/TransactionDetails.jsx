import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function TransactionDetails(){
  const [ transaction, setTransaction ] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setTransaction(responseJSON)
    })
    .catch(error => console.log(error))
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

  return (

<div> 
    <article> 
   
        <h5>
            <span>
              
              
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp; 
        </h5>
        <h4>{transaction.name}</h4>
        <h4>{transaction.deadline}</h4>
        <h4>{transaction.priority}</h4>
        <div className="navigation"> 
        <div>
        </div>
        <div>
            <Link to={`/transactions/new`}>
            <button>Add Budget Transaction</button>
            </Link>
        </div>
            <button onClick={handleDelete}>Delete Transaction</button>
        </div>
    </article>
</div>

);

}

export default TransactionDetails;