import { useEffect, useState } from "react";
import Transaction from './Transaction';

const API = import.meta.env.VITE_BASE_URL;

function Transactions() {
  const [ transactions, setTransactions ] = useState([]);

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
        <section>
            <table>
                <tbody>
                    {transactions.map((transaction) => {
                        return <Transaction key={transaction.id} transaction={transaction} />;
                    })}
                </tbody>
            </table>
        </section>
    </div>
);
}
export default Transactions;
