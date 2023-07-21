import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <p style={{
        fontSize: 24
      }}>Count is {count}</p>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        gap: 16,
      }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
