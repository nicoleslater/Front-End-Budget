import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";

function TransactionDetails(){
    const [transaction, setTransaction] = useState([]);
    
    const {index} = useParams();

    useEffect(() => {
        fetch(`{API}/transactions/${index}`)
        .then(response => response.json())
        .then(transaction => {
            setTransaction(transaction)
        })
        .catch((err) => console.error(err))
    }, [index]);

    const handleDelete = () => {

        const httpOptions = {"method": "DELETE"}

        fetch(`${API}/transactions/${index}`, httpOptions)
        .then((res) => {
           navigate('/transactions'); 
        })
        .catch((err) => console.error(err))
    
}
}