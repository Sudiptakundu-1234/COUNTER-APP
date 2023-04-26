import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { Alert, Badge, Button, Input } from "reactstrap";
import AlertBox from "./AlertBox";
import { reducer } from "./Reducer";

const initialValue = {
  count: 0,
  alert: false,
};

const Counter3 = () => {
  const [addNum, setaddNum] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValue);

  const increse = () => {
    dispatch({ type: "INCRESE" });
  };

  const decerse = () => {
    dispatch({ type: "DECRESE" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const handleAdd = () => {
    if (addNum) {
      dispatch({ type: "ADD", payload: addNum });
      setaddNum("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  return (
    <>
      <h2>
        <Badge color="primary">Using Reducer</Badge>
      </h2>
      <hr style={{ borderTop: "1px solid #000000" }} />
      {state.alert ? <AlertBox closeAlert={closeAlert} /> : ""}
      <div className="container">
        <h2>{state.count}</h2>
        <Button size="sm" color="primary" onClick={increse}>
          Increse
        </Button>
        <Button size="sm" color="primary" onClick={decerse}>
          Decrese
        </Button>
        <Button size="sm" color="danger" onClick={reset}>
          Reset
        </Button>
        <div>
          <Input
            bsSize="sm"
            type="number"
            placeholder="enter a number for add"
            value={addNum}
            onChange={(e) => setaddNum(e.target.value)}
          />
          <Button color="primary" size="sm" onClick={handleAdd}>
            add
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter3;
