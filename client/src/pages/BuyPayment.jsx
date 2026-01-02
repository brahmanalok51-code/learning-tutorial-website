import React from 'react'
import { useEffect } from 'react'

function BuyPayment() {

  useEffect(()=>{
const script = document.createElement("script")
script.src = "https://checkout.razorpay.com/v1/checkout.js"
script.async = true,
document.body.appendChild(script)
  },[])

  const paymentHandler = async ()=>{      
    try{
      // step 1: create order from backend
      const res = await fetch("http://localhost:5000/order", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({amount : 500})
      })

      const orderData = await res.json()

      // step 2 : configure razorpay options
      const options = {
        key : "rzp_test_faCruggaG7OAQz",
        amount : orderData.amount,
        currency : orderData.currency,
        name : "alok enterprises",
        description : "Demo Transaction",
        order_id : orderData.id,
        handler : async function(res){
          alert(`payment successful! ID : ${res.razorpay_payment_id}`)

          // step 3 : verify payment(optional)
          await fetch("http://localhost:5000/order/validate", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(res)
          })
        },

        prefil : {
          name : "Alok",
          email : "alok@gmail.com",
          contact : "3827832956"
        },
        theme : {color : "#3399cc"},
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    }
    catch(err){
console.log("payment initiation failed", err)
    }
  }


  return (
    <div style={{textAlign : 'center', marginTop : "50px"}}>
      <h2>Razorpay payment Demo</h2>
      
      <button onClick={paymentHandler}
      style={{
        padding : "10px 20px",
        fontSize : "16px",
        backgroundColor : "#3399cc",
        color : "#fff",
        border : "none",
        borderRadius : "5px",
        cursor : "pointer"
      }}>
    pay 5
      </button>
    </div>
  )
}

export default BuyPayment
