function Transaction({ transaction }){


 
    return(
      <div>
        <section>
            <h5>{transaction.name}</h5>
           
            <p>{transaction.amount}</p>
            <p>{transaction.deadline}</p>
            <p>{transaction.priority}</p>
    
            </section>
           </div>
    )
  }



export default Transaction;