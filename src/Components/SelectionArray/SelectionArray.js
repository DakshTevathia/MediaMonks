import React from "react";
import classes from "./SelectionArray.module.css";

const SelectionArray = ({ refArray, setSelectedIndex, selectedIndex }) => {
  const arrayButtonClicked = (ele) => {
    setSelectedIndex(ele);
    if (
      (ele === 8 && selectedIndex === 9) ||
      (ele === 7 && selectedIndex === 8) ||
      (ele === 7 && selectedIndex === 9)
    ) {
      refArray[7].scrollIntoView();
    } else if (ele === 7 || ele === 8) {
      refArray[8].scrollIntoView();
    } else {
      refArray[ele].scrollIntoView();
    }
  };
  return (
    <div className={classes.outerDiv}>
      <button
        style={{
          backgroundColor: `${selectedIndex === 0 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(0)}
      ></button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 1 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(1)}
      >
        1
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 2 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(2)}
      >
        2
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 3 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(3)}
      >
        3
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 4 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(4)}
      >
        4
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 5 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(5)}
      >
        5
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 6 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(6)}
      >
        6
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 7 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(7)}
      >
        7
      </button>
      <button
        style={{
          backgroundColor: `${selectedIndex === 8 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(8)}
      >
        8
      </button>

      <button
        style={{
          backgroundColor: `${selectedIndex === 9 ? "grey" : "transparent"}`,
        }}
        onClick={() => arrayButtonClicked(9)}
      ></button>
    </div>
  );
};

export default SelectionArray;
