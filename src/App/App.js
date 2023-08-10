import "./App.css";
import React, { useState, useRef } from "react";
import PrintButton from "../components/PrintButton";

import ComponentTab from "../components/BlockTab/BlockTab";
import ComponentToPrint from "../components/DiaryPage/DiaryPage";

function App() {
  const componentRef = useRef();

  return (
    <div className="App" style={{ display: "grid", justifyContent: "center" }}>
      <h1 style={{ justifySelf: "center", color: "#ffffff" }}>
        CUSTOM DIARY PAGE
      </h1>
      <ComponentTab />
      <div style={{ height: "10px" }} />
      <ComponentToPrint ref={componentRef} />
      <PrintButton contentRef={componentRef} />
    </div>
  );
}

export default App;
