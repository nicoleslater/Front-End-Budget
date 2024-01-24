import { useState } from "react";
import { useNavigate } from "react-router-dom";


const API = import.meta.env.VITE_BASE_URL;

function TransactionNewForm(){
  const navigate = useNavigate();
  const [ transaction, setTransaction ] = useState({
    name: "",
    amount: 0,
    deadline: "",
    priority: false
});

const addTransaction = () => {
  fetch(`${API}/transactions`, {
          method: "POST",
          body: JSON.stringify(transaction),
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(() => {
          navigate(`/transactions`);
      })
      .catch((error) => console.error("catch", error));
  };

const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
};

const handleCheckboxChange = () => {
    setTransaction({ ...transaction, priority: !transaction.priority });
};

  const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction();
  };


    return (
      <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="opacity-90 max-w-md mx-auto bg-pink-300 text-black p-2 rounded shadow-md">
          <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    value={transaction.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Enter Name..."
                    required
                  />
              
         
                  <label htmlFor="priority">Priority?</label>
                  <input
                    id="priority"
                    value={transaction.priority}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={transaction.priority}
                    required
                  />
           <label htmlFor="deadline">Deadline:</label>
                  <input
                    id="deadline"
                    value={transaction.deadline}
                    type="text"
                    onChange={handleTextChange}
                    checked={transaction.deadline}
                    required
                  />
              
          <label htmlFor="amount">Amount:$</label>
                  <input
                    id="amount"
                    value={transaction.amount}
                    onChange={handleTextChange}
                    type="text"
                    required
                  />
        <div>
          <button type="submit" className="bg-pink-300 text-white p-2 rounded-md hover:bg-purple-600 focus:outline-none focus:shadow-outline-black active:bg-black-800">
            Add New Transaction
          </button>
        </div>
      </form>
      </div>
    );
  }
    
    
    export default TransactionNewForm;