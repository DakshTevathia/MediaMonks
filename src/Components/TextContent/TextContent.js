import React from "react";
import FinalPageComponent from "./FinalPageComponent.js";

const TextContent = ({ selectedIndex }) => {
  let styleObjectDetails1;
  let stylesObjectDetails1Left = {
    left: "4rem",
    fontSize: "2.5rem",
    width: "22rem",
    position: "fixed",
    top: "42%",
    textDecoration: "underline",
    color: "white",
    fontWeight: "200",
  };
  let stylesObjectDetails1Right = {
    right: "4rem",
    fontSize: "2.5rem",
    width: "22rem",
    position: "fixed",
    top: "42%",
    textDecoration: "underline",
    color: "white",
    fontWeight: "200",
    textAlign: "right",
  };
  let styleObjectDetails2 = {
    position: "fixed",
    bottom: "1.1rem",
    left: "15%",
    color: "white",
    fontSize: "0.75rem",
    width: "22rem",
  };
  let textFilled1;
  let textFilled2;
  if (selectedIndex === 0) {
    textFilled1 = "We are breaking our vow of silence";
    textFilled2 =
      "In Januart 2011, after a decade, we opened the doors to our temple.Follow our noble eightfold path to digital enlightenment";
    styleObjectDetails1 = {
      left: "0.625rem",
      fontSize: "2.5rem",
      width: "22rem",
      position: "fixed",
      top: "0.625rem",
      textDecoration: "underline",
      color: "white",
    };
    styleObjectDetails2 = {
      position: "fixed",
      bottom: "7%",
      left: "0.625rem",
      color: "white",
      fontSize: "0.75rem",
      width: "22rem",
    };
  } else if (selectedIndex === 1) {
    styleObjectDetails1 = { ...stylesObjectDetails1Left };
    textFilled1 = "Talent is given True Skill is earned.";
    textFilled2 = "Step 1 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 2) {
    styleObjectDetails1 = { ...stylesObjectDetails1Left };
    textFilled1 = "Be flexible to change and sturdy in conviction.";
    textFilled2 = "Step 2 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 3) {
    styleObjectDetails1 = { ...stylesObjectDetails1Right };
    textFilled1 = "use many skills yet work as one";
    textFilled2 = "Step 3 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 4) {
    styleObjectDetails1 = { ...stylesObjectDetails1Right };
    textFilled1 = "to master anything find interest in everything.";
    textFilled2 = "Step 4 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 5) {
    styleObjectDetails1 = { ...stylesObjectDetails1Right };
    textFilled1 = "individual flourish if culture and wisdom are shared";
    textFilled2 = "Step 5 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 6) {
    styleObjectDetails1 = { ...stylesObjectDetails1Left };
    textFilled1 = "Train for perfection but aim for more";
    textFilled2 = "Step 6 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 7) {
    styleObjectDetails1 = { ...stylesObjectDetails1Right };
    textFilled1 = "Take pride in your work but don not seek praise";
    textFilled2 = "Step 7 out of 8 on the path to digital enlightment";
  } else if (selectedIndex === 8) {
    styleObjectDetails1 = { ...stylesObjectDetails1Right };
    textFilled1 = "Temporary Sacrifice brings lasting result";
    textFilled2 = "Step 8 out of 8 on the path to digital enlightment";
  } else {
    //9th is selected and we render a diff. component
  }
  return (
    <>
      {selectedIndex !== 9 ? (
        <div>
          <div style={styleObjectDetails1}>
            {textFilled1.toLocaleUpperCase()}
          </div>
          (<div style={styleObjectDetails2}>{textFilled2}</div>)
        </div>
      ) : (
        <FinalPageComponent />
      )}
    </>
  );
};

export default TextContent;
