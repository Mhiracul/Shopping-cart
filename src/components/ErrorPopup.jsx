import React from 'react';
import './ErrorPopup.css';

const ErrorPopup = ({ message }) => {
  return (
    <div className="error-popup">
      <p>{'Invalid email or Password'}</p>
    </div>
  );
};

export default ErrorPopup;
