import React from "react";
import { Input, Button } from "reactstrap";
import { useContext } from "react";
import Context from "./CreateContext";

const InputFiled = () => {
  const { textHandle, addNum, handleAdd } = useContext(Context);
  return (
    <>
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
    </>
  );
};

export default InputFiled;
