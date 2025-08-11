import React from "react";

const Shimmer = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-4 animate-pulse"
        >
          {/* Image placeholder */}
          <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>

          {/* Text placeholders */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
