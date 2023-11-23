import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <h1
              style={{
                backgroundColor: "rgb(238, 235, 235)",
                height: "200px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            ></h1>
            <h2
              style={{
                backgroundColor: "rgb(238, 235, 235)",
                width: "70%",
                height: "30px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            ></h2>
            <h2
              style={{
                backgroundColor: "rgb(238, 235, 235)",
                width: "70%",
                height: "30px",
                borderRadius: "10px",
              }}
            ></h2>
          </div>
        ))}
    </>
  );
};

export default Shimmer;
