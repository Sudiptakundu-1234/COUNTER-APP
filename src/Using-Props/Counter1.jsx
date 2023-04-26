import React from "react";
import { Alert, Badge, Button, Input } from "reactstrap";

const Counter1 = (props) => {
  const {
    count,
    addNum,
    alert,
    handleAdd,
    increse,
    decerse,
    reset,
    textHandle,
  } = props;
  console.log(props);
  return (
    <>
      <h2>
        <Badge color="primary">Using Props</Badge>
      </h2>
      <hr style={{ borderTop: "1px solid #000000" }} />
      {alert ? <Alert color="primary">Hey! please Enter a number</Alert> : ""}
      <div className="container">
        <h2>{count}</h2>
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
            onChange={(e) => textHandle(e)}
          />
          <Button color="primary" size="sm" onClick={handleAdd}>
            add
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter1;


