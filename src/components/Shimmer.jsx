import React from "react";

const Shimmer = ({ count = 8 }) => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: count }).map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-img shimmer"></div>
          <div className="shimmer-line shimmer short"></div>
          <div className="shimmer-line shimmer"></div>
          <div className="shimmer-line shimmer short"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
