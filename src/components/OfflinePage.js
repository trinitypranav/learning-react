import React from "react";

const OfflinePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4"> 🤔 You are offline 🔴</h1>
        <p className="text-lg text-gray-600">
          Unable to connect to the internet. Please check your internet
          connection and try again.
        </p>
      </div>
    </div>
  );
};

export default OfflinePage;
