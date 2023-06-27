import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleCount(e) {
    setCount(Number(e.target.value));
  }

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();

  const year = today.getFullYear();
  const month = months[today.getMonth()];
  const day = today.getDate();

  const formattedDate = `${month} ${day}, ${year}`;

  const date = new Date(formattedDate);
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step flex gap-2 justify-center">
        <span>Step : </span>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleStep}
        />
        {/* <button
          className="bg-gray-200 w-10 "
          onClick={() => setStep((s) => s - 1)}
        >
          -
        </button> */}
        <p>{step}</p>
        {/* <button
          className="bg-gray-200 w-10 "
          onClick={() => setStep((s) => s + 1)}
        >
          +
        </button> */}
      </div>
      <div className="count flex gap-2 justify-center mt-4">
        <span>Count : </span>
        <button
          className="bg-gray-200 w-10 "
          onClick={() => {
            setCount((s) => s - step);
          }}
        >
          -
        </button>
        <input
          className="border"
          type="text"
          value={count}
          onChange={handleCount}
        />
        {/* <p>{count}</p> */}
        <button
          className="bg-gray-200 w-10 "
          onClick={() => setCount((s) => s + step)}
        >
          +
        </button>
      </div>
      <div className="display flex gap-2 justify-center text-5">
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        {date.toDateString()}
      </div>
      <div className="flex justify-center">
        {(count !== 0 || step !== 1) && (
          <button className="bg-gray-300 px-4 m-4" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
