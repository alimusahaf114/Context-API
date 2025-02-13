import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    console.log(count); // This may log 0 due to async updates
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};

export default Counter;
