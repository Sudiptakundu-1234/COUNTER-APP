import React from "react";
import { useState } from "react";
import { Alert, Badge, Button, Input } from "reactstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [addNum, setAddNum] = useState("");
  const [alert, setAlert] = useState(false);

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
      <h2>
        <Badge color="primary">Using State</Badge>
      </h2>
      <hr style={{ borderTop: "1px solid #000000" }} />
      {alert ? <Alert color="primary">Hey! please Enter a number</Alert> : ""}
      <div className="container">
        <h2>{count}</h2>
        <Button
          size="sm"
          color="primary"
          onClick={() => (count >= 10 ? "" : setCount(count + 1))}
        >
          Increse
        </Button>
        <Button
          size="sm"
          color="primary"
          onClick={() => (count <= 0 ? "" : setCount(count - 1))}
        >
          Decrese
        </Button>
        <Button size="sm" color="danger" onClick={() => setCount(0)}>
          Reset
        </Button>
        <div>
          <Input
            bsSize="sm"
            type="number"
            placeholder="enter a number for add"
            value={addNum}
            onChange={(e) => setAddNum(parseInt(e.target.value))}
          />
          <Button color="primary" size="sm" onClick={handleAdd}>
            add
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
