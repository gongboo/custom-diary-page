import styles from "../styles/app.module.css";
import React, { useState } from "react";
import { ItemTypes } from "../constants/itemTypes";
import { useDrop } from "react-dnd";

import LineComponent from "./diary-components/lineComponent";
import BoxComponent from "./diary-components/boxComponent";
import DotgridComponent from "./diary-components/dotgridComponent";
import GridComponent from "./diary-components/gridComponent";
import TextComponent from "./diary-components/textComponent";
import ChecklistComponent from "./diary-components/checklistComponent";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [widgets, setWidgets] = useState([]);

  function onDrop(item) {
    setWidgets((widgets) => [...widgets, findComponent(item.name)]);
  }

  function findComponent(str) {
    const componentMap = {
      line: <LineComponent />,
      square: <BoxComponent />,
      text: <TextComponent />,
      checklist: <ChecklistComponent />,
      grid: <GridComponent />,
      dotgrid: <DotgridComponent />,
    };

    return componentMap[str];
  }

  return (
    <div ref={ref}>
      {
        <div ref={drop} className={styles.diary_page}>
          {widgets.map((widget, index) => (
            <div className={styles.diary_page_div} key={index}>
              {widget}
            </div>
          ))}
        </div>
      }
    </div>
  );
});

export default ComponentToPrint;
