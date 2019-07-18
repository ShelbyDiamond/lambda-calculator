import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
//import any components needed
import { operators } from "../../../data";

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operator] = useState(operators);
  return (
    <div>
      {operator.map(operate => {
        return <OperatorButton update={props.update} operate={operate} />;
      })}
    </div>
  );
};

export default Operators;
