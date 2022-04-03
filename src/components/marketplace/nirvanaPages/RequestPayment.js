// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// This will be our "Make a Payment Page."

const RequestPayment = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Event Handler for MakePayment input fields
    console.log(`hello`);
    navigate("/Nirvana");
  };

  return (
    <div className="wrapper">
      <div className="reqPayments">
        <h2>Request a payment.</h2>
        <p>Please Complete the fields below.</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
          <div className="fromBox">
            <label htmlFor="From">From: </label>
            <input type="text" name="From" required />
          </div>
          <div className="toBox">
            <label htmlFor="To">To:</label>
            <input type="text" name="To" required />
          </div>
          <div className="amountBox">
            <label htmlFor="Amount">Amount:</label>
            <input type="text" name="Amount" required />
          </div>
          <div className="paymentNoteBox">
            <label htmlFor="Note">Note:</label>
            <input type="text" name="Note" required />
          </div>
        </form>
        <div className="reqPaymentButton">
          <p>Request Payment</p>
        </div>
      </div>
    </div>
  );
};

export default RequestPayment;