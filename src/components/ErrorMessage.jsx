import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <div className="error-content">
        <div className="error-text">
          <h3>Oops!</h3>
          <p>{message || 'Something went wrong. Please try again.'}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
