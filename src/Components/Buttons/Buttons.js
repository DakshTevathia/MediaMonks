import React from "react";
import classes from "./Buttons.module.css";

const Buttons = ({ refArray, selectedIndex, setSelectedIndex }) => {
  const backClicked = () => {
    if (selectedIndex > 0) {
      if (selectedIndex === 9) {
        refArray[7].scrollIntoView();
      } else {
        refArray[selectedIndex - 1].scrollIntoView();
      }
      setSelectedIndex((s) => s - 1);
    }
  };
  const forwardClicked = () => {
    if (selectedIndex <= 9) {
      if (selectedIndex === 6) {
        refArray[selectedIndex + 2].scrollIntoView();
      } else if (selectedIndex === 7) {
        refArray[selectedIndex + 1].scrollIntoView();
      } else {
        refArray[selectedIndex + 1].scrollIntoView();
      }

      // refArray[selectedIndex - 1].scrollTo({ x: 500, y: 0 });
      setSelectedIndex((s) => s + 1);
    }
  };

  return (
    <div className={classes.buttonsDiv}>
      {selectedIndex !== 0 && (
        <div className={classes.bck} onClick={backClicked}>
          <h1> {"<"}</h1>
        </div>
      )}
      {selectedIndex !== 9 && (
        <div className={classes.fwd} onClick={forwardClicked}>
          <h1>{">"}</h1>
        </div>
      )}
    </div>
  );
};

export default Buttons;
