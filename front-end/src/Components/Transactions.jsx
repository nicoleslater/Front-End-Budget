import { useEffect, useState } from "react";
import Transaction from './Transaction';

const API = import.meta.env.VITE_BASE_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then(response => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setTransactions(responseJSON.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
<div className="Transactions">
  <table>
    <thead>
      <tr>
        <th colSpan="2">Current Transactions</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="2">Transactions</td>
      </tr>
    </tfoot>
  </table>
</div>


  );
}
export default Transactions;
