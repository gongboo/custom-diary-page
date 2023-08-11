import "./App.css";
import React, { useState, useRef } from "react";
import PrintButton from "../components/PrintButton";

import ComponentTab from "../components/BlockTab/BlockTab";
import ComponentToPrint from "../components/DiaryPage/DiaryPage";

function App() {
  const componentRef = useRef();
  const [padding, setPadding] = useState(10);
  const [holeSpace, setHoleSpace] = useState(0);

  const changePad = (num) => {
    setPadding(num);
  };

  const changeHoleSpace = (num) => {
    setHoleSpace(num);
  };
  const [holeDirection, setHoleDirection] = useState("left");

  const changeHoleDirection = (event) => {
    setHoleDirection(event.target.value);
  };

  return (
    <div className="App" style={{ display: "grid", justifyContent: "center" }}>
      <h1 style={{ justifySelf: "center", color: "#ffffff" }}>
        CUSTOM DIARY PAGE
      </h1>
      <ComponentTab
        changePad={changePad}
        pad={padding}
        holeSpace={holeSpace}
        changeHoleSpace={changeHoleSpace}
        holeDirection={holeDirection}
        changeHoleDirection={changeHoleDirection}
      />
      <div style={{ height: "10px" }} />
      <ComponentToPrint
        ref={componentRef}
        pad={padding}
        holeSpace={holeSpace}
        holeDirection={holeDirection}
      />
      <PrintButton contentRef={componentRef} />
    </div>
  );
}

export default App;
