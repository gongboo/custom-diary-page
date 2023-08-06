import "../styles/App.css";
import styles from "../styles/app.module.css";
import React, { useState, useRef } from "react";
import PrintButton from "./PrintButton";

import ComponentTab from "./componentTab";
import ComponentToPrint from "./diaryPage";

function App() {
  const componentRef = useRef();

  return (
    <div className="App">
      <h1 className={styles.title}>CUSTOM DIARY PAGE</h1>
      <ComponentTab />
      <ComponentToPrint ref={componentRef} />
      <PrintButton contentRef={componentRef} />
    </div>
  );
}

export default App;
