import React from "react";
import { Alert } from "reactstrap";

const AlertBox = ({ closeAlert }) => {
  setTimeout(() => {
    closeAlert();
  }, 3000);
  return (
    <>
      <Alert color="primary">Hey! please Enter a number</Alert>
    </>
  );
};

export default AlertBox;
