import React from "react";
import { useState } from "react";
import Counter1 from "./Counter1";

const FunctionHolder = () => {
  const [count, setCount] = useState(0);
  const [addNum, setAddNum] = useState("");
  const [alert, setAlert] = useState(false);

  const increse = () => {
    setCount(count >= 10 ? count : count + 1);
  };

  const decerse = () => {
    setCount(count <= 0 ? count : count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const textHandle = (e) => {
    setAddNum(parseInt(e.target.value));
  };

  const handleAdd = () => {
    if (addNum.length == 0) {
      setAlert(true);
      //   console.log(alert, addNum.length);
    }
    setTimeout(() => {
      setAlert(false);
      // console.log(alert);
    }, 3000);

    setAddNum("");
    setCount(parseInt(count + addNum));
    // console.log(typeof count);
    // console.log(typeof addNum);
  };

  return (
    <>
      <Counter1
        count={count}
        addNum={addNum}
        alert={alert}
        handleAdd={handleAdd}
        increse={increse}
        decerse={decerse}
        reset={reset}
        textHandle={textHandle}
      />
    </>
  );
};

export default FunctionHolder;
