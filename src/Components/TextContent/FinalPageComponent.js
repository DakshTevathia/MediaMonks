import React from "react";
import classes from "./FinalPageComponent.module.css";

const FinalPageComponent = () => {
  return (
    <div className={classes.containerDiv}>
      <p>
        <u>BECOME A MONK</u>
      </p>
      <div>
        <p style={{ textAlign: "right" }}>
          Interested in joining our monastery?
        </p>
        <p style={{ textAlign: "right" }}>
          Check out opening on <span>mediamonks.com/careers.</span>
        </p>
        <div className={classes.horizonalFlex}>
          <span>Mail Us</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default FinalPageComponent;
