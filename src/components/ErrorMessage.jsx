import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
      <div className="flex items-center gap-3">
        <span className="text-3xl"></span>
        <div>
          <h3 className="text-lg font-semibold text-red-800">Oops!</h3>
          <p className="text-red-700">{message || 'Something went wrong. Please try again.'}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
