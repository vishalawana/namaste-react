import { useState, useEffect } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);

  // Lifecycle: Mount + Update (when count changes)
  useEffect(() => {
    console.log("User (Functional) Mounted or count updated:", count);

    // Cleanup for Unmount
    return () => {
      console.log("User (Functional) Unmounted");
    };
  }, [count]);

  return (
    <div className="function-comp">
      <div>This is FUNCTION component</div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h3>Contact: {contact}</h3>
    </div>
  );
};

export default User;
