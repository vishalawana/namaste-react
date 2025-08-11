import React from 'react';

function Grocery() {
  return (
    <div className="p-6 bg-green-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-green-700">Grocery Component</h2>
      <p className="text-gray-600 mt-2">This is a sample Grocery component.</p>
      {console.log("Grocery component rendered")}
    </div>
  );
}

export default Grocery;
