import "../styles/App.css";
import styles from "../styles/app.module.css";
import React, { useState, useRef } from "react";
import PrintButton from "./PrintButton";

import ComponentTab from "./componentTab";
import ComponentToPrint from "./diaryPage";

function App() {
  const componentRef = useRef();

  return (
    <div className="App" style={{ display: "grid", justifyContent: "center" }}>
      <h1 className={styles.title} style={{ justifySelf: "center" }}>
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
