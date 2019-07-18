import React from "react";

const SpecialButton = props => {
  return (
    <>
      {/* <p onClick={() => props.update(props.spec)}>{props.spec}</p> */}
      <button className="specialButtons"> {props.spec} </button>
    </>
  );
};
export default SpecialButton;
