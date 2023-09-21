import React, { useState } from "react";
import styles from "./styles/BlockTab.module.css";
import { ItemTypes } from "../Constants/itemTypes";
import { useDrag } from "react-dnd";
// import { MdSettingsOverscan } from "react-icons/md";
//탭에 들어가는 것은 ~Creator로 통일

function useDraggable(itemName) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: itemName },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return { isDragging, drag };
}

function LineCreator() {
  const { isDragging, drag } = useDraggable("line");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>line</div>
    </div>
  );
}

function SquareCreator() {
  const { isDragging, drag } = useDraggable("square");
  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>square</div>
    </div>
  );
}

function TextCreator() {
  const { isDragging, drag } = useDraggable("text");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>text</div>
    </div>
  );
}

function ChecklistCreator() {
  const { isDragging, drag } = useDraggable("checklist");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>checklist</div>
    </div>
  );
}

function GridCreator() {
  const { isDragging, drag } = useDraggable("grid");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>grid</div>
    </div>
  );
}

function DotgridCreator() {
  const { isDragging, drag } = useDraggable("dotgrid");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>dotgrid</div>
    </div>
  );
}

function MonthTableCreator() {
  const { isDragging, drag } = useDraggable("monthTable");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>monthTable</div>
    </div>
  );
}

function PictureDiaryCreator() {
  const { isDragging, drag } = useDraggable("pictureDiary");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>pictureDiary</div>
    </div>
  );
}

function ProgressBarCreator() {
  const { isDragging, drag } = useDraggable("progressBar");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>progressBar</div>
    </div>
  );
}

function CounterCreator() {
  const { isDragging, drag } = useDraggable("counter");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>counter</div>
    </div>
  );
}

function CircularDailyCreator() {
  const { isDragging, drag } = useDraggable("circularDaily");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>circularDaily</div>
    </div>
  );
}

function DoubleCircularDailyCreator() {
  const { isDragging, drag } = useDraggable("doublecircularDaily");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>doublecircularDaily</div>
    </div>
  );
}
function RuledCreator() {
  const { isDragging, drag } = useDraggable("ruled");

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>ruled</div>
    </div>
  );
}

function ComponentTab(props) {
  const [tabState, setTabState] = useState("tab1");

  const tabContent = {
    tab1: (
      <div style={{ overflow: "scroll" }}>
        <DotgridCreator />
        <GridCreator />
        <LineCreator />
        <SquareCreator />
        <TextCreator />
        <RuledCreator />
        <MonthTableCreator />
        {/* <PictureDiaryCreator /> */}
        {/* <ProgressBarCreator /> */}
        <ChecklistCreator />
        <CounterCreator />
        <CircularDailyCreator />
        <DoubleCircularDailyCreator />
      </div>
    ),
    tab2: (
      <div>
        <MonthTableCreator />
        <PictureDiaryCreator />
        {/* <ProgressBarCreator /> */}
        <ChecklistCreator />
        <CounterCreator />
        <CircularDailyCreator />
        <DoubleCircularDailyCreator />
      </div>
    ),
    tab3: (
      <div>
        <div style={{ display: "block" }}>
          <div style={{ display: "inline" }}>타공자리 위치 </div>
          {/* <input type="checkbox" id="sideHoleSpace" name="sideHoleSpace" /> */}

          <label>
            <input
              type="radio"
              value="left"
              checked={props.holeDirection === "left"}
              onChange={props.changeHoleDirection}
            />
            left
          </label>

          <label>
            <input
              type="radio"
              value="top"
              checked={props.holeDirection === "top"}
              onChange={props.changeHoleDirection}
            />
            top
          </label>
        </div>
        <div>
          <label>타공 간격 </label>
          <input
            type="number"
            id="sideHoleSpace"
            name="sideHoleSpace"
            value={props.holeSpace}
            onChange={(event) => props.changeHoleSpace(event.target.value)}
            min="1"
            max="100"
          />
        </div>
        <div style={{ display: "block" }}>
          <div style={{ display: "inline" }}>가장자리 간격 </div>
          <input
            type="number"
            id="pagePadding"
            name="pagePadding"
            value={props.pad}
            onChange={(event) => props.changePad(event.target.value)}
            min="1"
            max="100"
            style={{ display: "inline" }}
          />
        </div>
      </div>
    ),
    // tab3: <div className={styles.component_blocks}>Tab 3 Content</div>,
  };

  return (
    <div className={styles.tabBlock}>
      <button
        className={tabState === "tab1" ? "btn-normal" : "btn-unselect"}
        onClick={() => setTabState("tab1")}
        // style={tabState === "tab1" ? { background: "var(--sub1-color)" } : {}}
      >
        simple
      </button>
      <button
        className={tabState === "tab2" ? "btn-normal" : "btn-unselect"}
        onClick={() => setTabState("tab2")}
        // style={tabState === "tab2" ? { background: "var(--sub1-color)" } : {}}
      >
        complex
      </button>
      <button
        className={tabState === "tab3" ? "btn-normal" : "btn-unselect"}
        onClick={() => setTabState("tab3")}
        // style={tabState === "tab3" ? { background: "var(--sub1-color)" } : {}}
      >
        {/* <MdSettingsOverscan /> */}
        page setting
      </button>
      {tabContent[tabState]}
    </div>
  );
}

export default ComponentTab;
