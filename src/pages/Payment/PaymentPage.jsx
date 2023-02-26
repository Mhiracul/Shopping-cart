import React, { useState } from "react";
import axios from "axios";
import './payment.css'
import monnifyLogo from '../../assets/img/monnifyLogo.png';



const PaymentPage = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


  

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.monnify.com/api/v1/bank-transfer/charge", {
        amount,
        apiKey: "YOUR_API_KEY",
        reference: "YOUR_UNIQUE_REFERENCE",
        currencyCode: "NGN",
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
   
        <div className="payment-page">
      <img src={monnifyLogo} alt="Monnify logo" className="monnify-logo"/>
      <h2>Payment Page</h2>
      {error && <p>{error}</p>}
      {success && <p>Payment Successful</p>}
      <form onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <button type="submit">Pay with Monnify</button>
      </form>
    </div>
  );
};

export default PaymentPage;