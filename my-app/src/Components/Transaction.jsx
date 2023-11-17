import {Link} from "react-router-dom";

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
            <td style={{ cursor: "default"}}>
                <a href={transaction.}
            </td>

        </tr>
    )
}export default Transaction;