import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} onSetCount={setCount} />
      <Reset count={count} onSetCount={setCount} />
    </div>
  );
}

function Counter({ count, onSetCount }) {
  return (
    <div className="counter-container">
      <button onClick={() => onSetCount(count - 1)} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => onSetCount(count + 1)}>+</button>
    </div>
  );
}

function Reset({ count, onSetCount }) {
  return (
    <button
      className="reset"
      onClick={() => onSetCount(0)}
      disabled={count === 0}
    >
      Reset
    </button>
  );
}
