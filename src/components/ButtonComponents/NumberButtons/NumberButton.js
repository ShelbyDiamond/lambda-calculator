import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* <p onClick={() => props.update(props.num)}>{props.num}</p> */}
      <button className="numberButtons"> {props.num} </button>
    </>
  );
};
export default NumberButton;
