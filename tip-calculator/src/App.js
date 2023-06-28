import { useState } from "react";
import Bill from "./components/Bill";
import Question from "./components/Question";

function App() {
  const [bill, setBill] = useState(0);
  const [myLike, setMyLike] = useState(0);
  const [friendLike, setFriendLike] = useState(0);
  const avgLike = Math.round((myLike + friendLike) / 2);
  const tip = (avgLike / 100) * bill;
  function handleBill(e) {
    setBill(Number(e.target.value));
  }
  function handleReset() {
    setBill(0);
    setMyLike(0);
    setFriendLike(0);
  }
  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center bg-slate-500 ">
      <h1 className="text-3xl text-white font-extrabold ">Tip Calculator</h1>
      <div className="md:w-6/12 w-10/12 h-3/4 mx-auto flex flex-col gap-2  items-center bg-slate-50 w-md py-10">
        <Question>
          How much was the bill?
          <input
            className="mx-3 border-[3px] border-gray-500 rounded-sm"
            type="text"
            value={bill}
            onChange={handleBill}
          />
        </Question>
        <Question>
          How did you like the service?
          <select
            className="mx-3 border-[3px] border-gray-500 rounded-sm"
            value={myLike}
            onChange={(e) => setMyLike(Number(e.target.value))}
          >
            <option value={0}>
              {myLike === 0 ? "✔" : "  "} Dissatisfied (0%)
            </option>
            <option value={5}>
              {myLike === 5 ? "✔" : "  "} It was okay (5%)
            </option>
            <option value={10}>
              {myLike === 10 ? "✔" : "  "} It was good (10%)
            </option>
            <option value={20}>
              {myLike === 20 ? "✔" : "  "} Absolutely Amazing! (20%)
            </option>
          </select>
        </Question>
        <Question>
          How did your friend like the service?
          <select
            className="mx-3 border-[3px] border-gray-500 rounded-sm"
            value={friendLike}
            onChange={(e) => setFriendLike(Number(e.target.value))}
          >
            <option value={0}>
              {friendLike === 0 ? "✔" : "  "} Dissatisfied (0%)
            </option>
            <option value={5}>
              {friendLike === 5 ? "✔" : "  "} It was okay (5%)
            </option>
            <option value={10}>
              {friendLike === 10 ? "✔" : "  "} It was good (10%)
            </option>
            <option value={20}>
              {friendLike === 20 ? "✔" : "  "} Absolutely Amazing! (20%)
            </option>
          </select>
        </Question>
        {bill !== 0 ? (
          <Bill onReset={handleReset}>
            You pay ${bill + tip} (${bill} + ${tip} tip)
          </Bill>
        ) : null}
      </div>
    </div>
  );
}

export default App;
