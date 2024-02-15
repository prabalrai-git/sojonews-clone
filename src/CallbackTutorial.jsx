import React, { useState, useCallback } from "react";

const ChildComponent = ({ onClick }) => {
  console.log("ChildComponent rendering");
  return (
    <button className="bg-appgreen" onClick={onClick}>
      Click me!
    </button>
  );
};

const CallbackTutorial = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const memoizedHandleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty dependency array means the callback won't change across renders

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <br />

      <ChildComponent onClick={handleClick} />

      <br />
      <br />

      <ChildComponent onClick={memoizedHandleClick} />
    </div>
  );
};

export default CallbackTutorial;
