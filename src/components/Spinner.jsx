import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-warm-brown-200 border-t-warm-brown-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-warm-brown-700 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
