import React from "react";
import "./Transaction.css";



function Transaction({transaction}){


 
    return(
    
      
    <div class="transactionCardList-card-grid">
    <div class="booster">
      <div class="cardTitle">
        <h3>{transaction.name}</h3>
        <p>{transaction.amount}</p>
      </div>
      <div class="imageURL">
        <img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386549&type=card"></img>
      </div>
      <div class="cardText">
        <p>{transaction.deadline}</p>
        <p>{transaction.priority}</p>
      </div>
    </div>
           </div>
    )
  }
  



export default Transaction;