import React from "react";
import "./Transaction.css";



function Transaction({transaction}){


 
    return(
    
      
    <div class="transactionCardList-card-grid">
    <div class="booster">
      <div class="cardTitle">
        <h1>{transaction.name}</h1>
      </div>
      <div class="imageURL">
        <img src="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386549&type=card"></img>
      </div>
      <div class="cardText">
        <p>lorem ipsum blah</p>
      </div>
    </div>
           </div>
    )
  }
  



export default Transaction;