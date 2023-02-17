import React from "react";
import background from "../../Assets/background.jpg";
import classes from "./MainImageComponent.module.css";

const MainImageComponent = () => {
  return (
    <div className={classes.bgImg}>
      <img src={background} alt="mediamonk_BG_image" />
    </div>
  );
};

export default MainImageComponent;
