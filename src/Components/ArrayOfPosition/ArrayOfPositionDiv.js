import React, { useRef } from "react";
import classes from "./ArrayOfPositionDiv.module.css";

const ArrayOfPositionDiv = ({ getRefArray }) => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const itemEls = useRef([]);
  if (itemEls.current) {
    getRefArray(itemEls.current);
  }
  return (
    <div className={classes.containerPosDiv}>
      {arr.map((ele, idx) => (
        <div
          className={classes.individualPosDiv}
          key={idx}
          ref={(element) => (itemEls.current[idx] = element)}
        >
          {ele}
        </div>
      ))}
    </div>
  );
};

export default ArrayOfPositionDiv;
