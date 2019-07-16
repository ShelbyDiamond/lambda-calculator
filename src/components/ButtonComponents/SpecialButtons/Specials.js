import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
//import any components needed
import { specials } from "../../../data";
//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials);
  return (
    <div>
      {special.map(spec => (
        <SpecialButton update={props.update} spec={spec} />
      ))}
    </div>
  );
};

export default Specials;
