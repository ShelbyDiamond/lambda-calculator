import React from "react";

const OperatorButton = props => {
  return (
    <>
      {/* <p onClick={() => props.update(props.operate.value)}>
        {props.operate.char}
      </p> */}
      <button className="operateButtons"> {props.operate.char} </button>
    </>
  );
};

export default OperatorButton;
