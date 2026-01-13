import React from 'react';

const ErrorMessage = ({ message }) => (
    <div className="flex justify-center items-center min-h-screen">
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p className="font-bold">Error</p>
      <p>{message || 'Womp womp something went wrong. Please try again.'}</p>
    </div>
);


export default ErrorMessage;
