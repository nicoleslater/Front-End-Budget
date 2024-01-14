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
                <a href={transaction.name}></a>
                </span>
                <h4>
                  {transaction.}
                </h4>
              </h5>
            </article>
        </div>
      )
}

export default TransactionDetails;