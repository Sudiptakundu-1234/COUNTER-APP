import React from "react";
import { useContext } from "react";
import { Button } from "reactstrap";
import Context from "./CreateContext";

const Buttons = () => {
  const { increse, decerse, reset } = useContext(Context);
  return (
    <>
      <Button size="sm" color="primary" onClick={increse}>
        Increse
      </Button>
      <Button size="sm" color="primary" onClick={decerse}>
        Decrese 
      </Button>
      <Button size="sm" color="danger" onClick={reset}>
        Reset
      </Button>
    </>
  );
};

export default Buttons;
