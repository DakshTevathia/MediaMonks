import React from "react";
import classes from "./TextContent.module.css";

const TextContent = ({ selectedIndex }) => {
  console.log(selectedIndex);
  return <div className={classes.textContentContainer}>{selectedIndex}</div>;
};

export default TextContent;
