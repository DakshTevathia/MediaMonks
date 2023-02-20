import { useState } from "react";
import "./App.css";
import ArrayOfPositionDiv from "./Components/ArrayOfPosition/ArrayOfPositionDiv";
import Buttons from "./Components/Buttons/Buttons";
import MainImageComponent from "./Components/MainBgComponent/MainImageComponent";
import SelectionArray from "./Components/SelectionArray/SelectionArray";
import logo from "./Assets/logo.svg";
import TextContent from "./Components/TextContent/TextContent";

function App() {
  const [refArray, setRefArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const getRefArray = (refArr) => {
    setRefArray(refArr);
  };
  return (
    <div className="App klavika">
      <img className="mediaMonksLogo" src={logo} alt="logo"></img>
      <MainImageComponent />
      <ArrayOfPositionDiv getRefArray={getRefArray} />
      <SelectionArray
        refArray={refArray}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <Buttons
        refArray={refArray}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
      <TextContent selectedIndex={selectedIndex} />
    </div>
  );
}

export default App;
