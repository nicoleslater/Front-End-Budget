import { Link } from "react-router-dom";

function Transaction({ transaction }){
    return (
        <tr>
            <td>
                {transaction.is_priority ? (
                    <span>💰</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                {transaction.item_name}
            </td>
            <td>
                {transaction.amount}
            </td>
            <td>
                {transaction.due_date}
            </td>
            <td>
                <Link to={`/transactions/${transaction.id}`}>🏦</Link>
            </td>

        </tr>
    );
}
export default Transaction;