import React from "react";
import './payment.css'




const PaymentPage = () => {
  const handlePayment = async (event) => {
    event.preventDefault();
    
    const response = await fetch('/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: 5000,
        email: 'john@example.com',
        phone: '08012345678',
        fullName: 'John Doe'
      })
    });
  
    const { payment } = await response.json();
    window.location.href = payment.paymentUrl;
  };
  
  return (
    <div className="Payment-body">
      <h2>Payment page</h2>
      
    <form className="paymentForm" onSubmit={handlePayment}>
      <input type="text" name="fullName" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="phone" placeholder="Phone Number" required />
      <input type="number" name="amount" placeholder="Amount" required />
      <button type="submit">Pay</button>
    </form>
    </div>
  );
  }  
export default PaymentPage;