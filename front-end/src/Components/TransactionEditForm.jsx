import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


const API = import.meta.env.VITE_BASE_URL;

function TransactionEditForm(){
    let { id } = useParams();
    const navigate = useNavigate();

    const [ transaction, setTransaction ] = useState({
        name: "",
        amount: 0,
        deadline: "",
        priority: false
    });

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setTransaction({ ...transaction, priority: !transaction.priority });
    };

    const updateTransaction = () => {
            console.log(`${API}/transactions/${id}`)

            fetch(`${API}/transactions/${id}`, {
            method: "PUT",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            navigate(`/transactions/${id}`);
        })
        .catch((error) => console.error("catch", error));
    };

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
            setTransaction(responseJSON);
        })
        .catch((error) => console.error(error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTransaction();
    };

    return (
        <div className="Edit">
            <h2>Update Transaction</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name:</label>
                </td>
                <td>
                  <input
                    id="name"
                    value={transaction.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Enter Name..."
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Deadline">Deadline:</label>
                </td>
                <td>
                  <input
                    id="deadline"
                    value={transaction.deadline}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Enter deadline"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="priority">Priority?</label>
                </td>
                <td>
                  <input
                    id="priority"
                    value={transaction.priority}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={transaction.priority}
                    required
                  />
                </td>
              </tr>
              
              <div>
                  <label htmlFor="amount">Amount:$</label>
                  <input
                    id="amount"
                    value={transaction.amount}
                    type="text"
                    required
                  />
              </div>
            </tbody>
          </table>
          <div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
      
          <Link to={`/transactions/${id}`}>
            <button>Go Back to Current Transaction 😌 </button>
          </Link>
        </div>
      );
    }
    
    export default TransactionEditForm;