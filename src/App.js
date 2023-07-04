import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <DateCounter />
    </div>
  );
}

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleAddCount = () => {
    setCount((c) => c + step);
  };

  const handleReduceCount = () => {
    setCount((c) => c - step);
  };

  return (
    <div>
      <h1>Date Counter</h1>
      <div className="date-ui">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span className="context">Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="date-ui">
        <button onClick={handleReduceCount}>-</button>
        <span className="context">Count: {count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} Days before Today is `
            : `${Math.abs(count)} Days From Today is `}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
};
