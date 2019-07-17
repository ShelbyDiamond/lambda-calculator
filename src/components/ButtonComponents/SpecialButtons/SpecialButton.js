import React from "react";

const SpecialButton = props => {
  return (
    <>
      <p onClick={() => props.update(props.spec)}>{props.spec}</p>
    </>
  );
};
export default SpecialButton;
