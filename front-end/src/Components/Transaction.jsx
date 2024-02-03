import React from "react";
import "./Transaction.css";



function Transaction({transaction}){


 
    return(
    
      
    <div className="transactionCardList-card-grid">
    <div className="booster">
      <div className="cardTitle">
        <h3>{transaction.name}</h3>
        <p>{transaction.amount}</p>
      </div>
      <div className="image">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"></img>
      </div>
      <div className="cardText">
        <p>{transaction.deadline}</p>
        <p>{transaction.priority}</p>
      </div>
    </div>
           </div>
    )
  }
  



export default Transaction;