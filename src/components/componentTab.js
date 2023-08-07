import React, { useState } from "react";
import styles from "../styles/componentBlocks.module.css";
import { ItemTypes } from "../constants/itemTypes";
import { useDrag } from "react-dnd";

//탭에 들어가는 것은 ~Creator로 통일

function LineCreator() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: "line" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>line</div>
    </div>
  );
}

function SquareCreator() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: "square" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>square</div>
    </div>
  );
}

function TextCreator() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: "text" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>text</div>
    </div>
  );
}

function ChecklistCreator() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: "checklist" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>checklist</div>
    </div>
  );
}

function GridCreator() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: "grid" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>grid</div>
    </div>
  );
}

function DotgridCreator() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { name: "dotgrid" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.component_blocks}>
      <div>dotgrid</div>
    </div>
  );
}

function ComponentTab() {
  const [tabState, setTabState] = useState("tab1");
  const tabContent = {
    tab1: (
      <div>
        <h4>Tab 1 Content</h4>
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
        <h4>Tab 2 Content</h4>
        <div>테두리 그리기</div>
        <div>
          <input
            type="radio"
            id="contactChoice1"
            name="contact"
            value="email"
          />
          <label for="contactChoice1">Email</label>

          <input
            type="radio"
            id="contactChoice2"
            name="contact"
            value="phone"
          />
          <label for="contactChoice2">Phone</label>

          <input type="radio" id="contactChoice3" name="contact" value="mail" />
          <label for="contactChoice3">Mail</label>
        </div>
        <div>타공자리 확보 side-space</div>
        <input type="checkbox" id="horns" name="horns" />
        <label for="horns">Horns</label>
        <input
          type="number"
          id="tentacles"
          name="tentacles"
          min="10"
          max="100"
        />
        <div>가장자리 간격 allside-space</div>
        <input
          type="number"
          id="tentacles"
          name="tentacles"
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
      {/* <button onClick={() => setTabState("tab3")}>tab3</button> */}
      {tabContent[tabState]}
    </div>
  );
}

export default ComponentTab;
