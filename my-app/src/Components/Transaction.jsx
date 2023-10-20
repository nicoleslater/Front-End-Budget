import {Link} from "react-router-dom";

function Transaction({ transaction, index}){
    return (
        <tr>
            <td>
                <Link to={`/transactions/${index}`}></Link>
            </td>
        </tr>
    )
}export default Transaction;