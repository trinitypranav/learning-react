import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-60 h-auto mx-5 my-1 rounded-lg shadow-lg border p-3"
          >
            <h1 className="bg-orange-50 h-52 rounded-lg mb-3"></h1>
            <h2 className="bg-orange-50 w-2/3 h-8 rounded-lg mb-4"></h2>
            <h2 className="bg-orange-50 w-2/3 h-8 rounded-lg mb-4"></h2>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
