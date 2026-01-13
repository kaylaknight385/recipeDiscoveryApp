import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <p>{message || 'Womp womp something went wrong. Please try again.'}</p>
    </div>
  );
};

export default ErrorMessage;
