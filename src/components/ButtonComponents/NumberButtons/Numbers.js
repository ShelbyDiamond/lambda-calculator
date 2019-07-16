import React, { useState } from "react";
import NumberButton from "./NumberButton";

//import any components needed
import { numbers } from "../../../data";
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);

  return (
    <div>
      {number.map(num => (
        <NumberButton num={num} />
      ))}
    </div>
  );
};

export default Numbers;
