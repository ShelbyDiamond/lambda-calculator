import React from "react";

const OperatorButton = props => {
  return (
    <>
      <p onClick={() => props.update(props.operate.value)}>
        {props.operate.char}
      </p>
    </>
  );
};

export default OperatorButton;
