import React from "react";

function Bill({ children, onReset }) {
  return (
    <div className="h-full  flex flex-col justify-evenly items-center">
      <div className="text-xl font-bold">{children}</div>
      <button
        onClick={onReset}
        className=" mx-8 text-normal block bg-red-500 rounded-sm px-4 py-2 font-normal"
      >
        Reset
      </button>
    </div>
  );
}

export default Bill;
