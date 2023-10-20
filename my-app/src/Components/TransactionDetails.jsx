import {Link, useParams, useNavigate} from "react-router-dom";

function TransactionDetails(){
    const [transaction, setTransaction] = useState([]);
    let {index} = useParams();

    useEffect(() => {
        fetch(`{API}/transactions/${index}`)
        .then(response => response.json());
        .then(transaction => {
            setTransaction(transaction)
        })
    })
}