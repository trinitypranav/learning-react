import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </>
  );
};

export default Shimmer;
