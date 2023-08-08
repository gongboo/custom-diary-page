import React, { useState } from "react";
import styles from "../styles/componentBlocks.module.css";
import { ItemTypes } from "../constants/itemTypes";
import { useDrag } from "react-dnd";

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

function ComponentTab() {
  const [tabState, setTabState] = useState("tab1");
  const tabContent = {
    tab1: (
      <div>
        <ChecklistCreator />
        <DotgridCreator />
        <GridCreator />
        <LineCreator />
        <SquareCreator />
        <TextCreator />
      </div>
    ),
    tab2: (
      <div>
        <MonthTableCreator />
        <PictureDiaryCreator />
        {/* <ProgressBarCreator /> */}

        <CounterCreator />
        <CircularDailyCreator />
        <DoubleCircularDailyCreator />
      </div>
    ),
    tab3: (
      <div>
        <div>테두리 그리기</div>
        <div>
          <input
            type="radio"
            id="pageBorderChoice1"
            name="pageBorder"
            value="1"
          />
          <label for="pageBorderChoice1">테두리1</label>

          <input
            type="radio"
            id="pageBorderChoice2"
            name="pageBorder"
            value="2"
          />
          <label for="pageBorderChoice2">테두리2</label>

          <input
            type="radio"
            id="pageBorderChoice3"
            name="pageBorder"
            value="3"
          />
          <label for="pageBorderChoice3">테두리3</label>
        </div>

        <div>타공자리 확보 side-space</div>
        <input type="checkbox" id="sideHoleSpace" name="sideHoleSpace" />
        <label for="sideHoleSpace">타공 간격</label>
        <input
          type="number"
          id="sideHoleSpace"
          name="sideHoleSpace"
          min="10"
          max="100"
        />

        <div>가장자리 간격 allside-space</div>
        <input
          type="number"
          id="pagePadding"
          name="pagePadding"
          min="10"
          max="100"
        />
      </div>
    ),
    // tab3: <div className={styles.component_blocks}>Tab 3 Content</div>,
  };

  return (
    <div className={styles.tabBlock}>
      <button onClick={() => setTabState("tab1")}>tab1</button>
      <button onClick={() => setTabState("tab2")}>tab2</button>
      <button onClick={() => setTabState("tab3")}>tab3</button>
      {tabContent[tabState]}
    </div>
  );
}

export default ComponentTab;
