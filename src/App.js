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
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const handleAddStep = (context) => {
    setStep((s) => s + 1);
  };

  const handleAddCount = () => {
    setCount((c) => c + step);
    // let dateCount = Date.parse(date);
    setDate((d) => new Date(Date.parse(d) + 3).toLocaleString());
  };

  const handleReduceStep = () => {
    setStep((s) => s - 1);
  };

  const handleReduceCount = () => {
    setCount((c) => c - step);
  };

  return (
    <div>
      <h1>Date Counter</h1>
      <div className="date-ui">
        <button onClick={handleReduceStep}>-</button>
        <span className="context">Step: {step}</span>
        <button onClick={handleAddStep}>+</button>
      </div>
      <div className="date-ui">
        <button onClick={handleReduceCount}>-</button>
        <span className="context">Count: {count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>

      <p>Today is {date}</p>
    </div>
  );
};
