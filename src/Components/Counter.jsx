import React from "react";
import { useState } from "react"; // Hook

// function initialSetup(){
//     console.log("hi");
//     return 10;
// }

const Counter = () => {
  const [counterState, setCounterState] = useState(() => {
    return { counter: 10, titleTest: "Fun" };
  });
  const [titleState, setTitleState] = useState("Fun");

  function incrementcounter() {
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter + 1 };
    });
  }

  function decrementcounter() {
    setCounterState((prevState) => {
      return { ...prevState, counter: prevState.counter - 1 };
    });
  }

  return (
    <div className="col-12 col-md-4 offset-md-4 border text-white p-3">
      <span className="h2 pt-4 m-2 text-white-50">
        {titleState} Counter
      </span>
      <br />
      <button
        className="btn btn-success m-1"
        onClick={incrementcounter}
      >
        +1
      </button>
      <button
        className="btn btn-danger m-1"
        onClick={decrementcounter}
      >
        -1
      </button>
      <br />
      <span className="h4">
        Counter: &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};

export default Counter;
