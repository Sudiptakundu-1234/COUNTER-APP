import React from "react";
import { useContext } from "react";
import Context from "./CreateContext";
import { Alert, Badge, Button, Input } from "reactstrap";
import Buttons from "./Buttons";
import InputFiled from "./InputFiled";

const Counter2 = () => {
  const { count, alert } = useContext(Context);

  return (
    <>
      <h2>
        <Badge color="primary">Using Context-Api</Badge>
      </h2>
      <hr style={{ borderTop: "1px solid #000000" }} />
      {alert ? <Alert color="primary">Hey! please Enter a number</Alert> : ""}
      <div className="container">
        <h2>{count}</h2>
        <Buttons />
        <InputFiled />
      </div>
    </>
  );
};

export default Counter2;
