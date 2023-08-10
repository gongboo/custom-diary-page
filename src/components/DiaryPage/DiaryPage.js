import styles from "./styles/DiaryPage.module.css";
import React, { useState } from "react";
import { ItemTypes } from "../Constants/itemTypes";
import { useDrop } from "react-dnd";

import LineComponent from "../Blocks/SimpleBlocks/LineBlock";
import BoxComponent from "../Blocks/SimpleBlocks/SquareBlock";
import DotgridComponent from "../Blocks/SimpleBlocks/DotgridBlock";
import GridComponent from "../Blocks/SimpleBlocks/GridBlock";
import TextComponent from "../Blocks/SimpleBlocks/TextBlock";
import ChecklistComponent from "../Blocks/ComplexBlocks/ChecklistBlock";
import CircularDailyComponent from "../Blocks/ComplexBlocks/CircularDailyBlock";
import DoubleCircularDailyComponent from "../Blocks/ComplexBlocks/DoubleCircularDailyBlock";

import MonthTableComponent from "../Blocks/ComplexBlocks/MonthTableBlock";
import PictureDailyComponent from "../Blocks/ComplexBlocks/PictureDailyBlock";
// import ProgressComponent from "../Blocks/progressComponent";
import CounterComponent from "../Blocks/ComplexBlocks/CounterBlock";

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
      circularDaily: <CircularDailyComponent />,
      doublecircularDaily: <DoubleCircularDailyComponent />,
      monthTable: <MonthTableComponent />,
      pictureDiary: <PictureDailyComponent />,
      // progressBar: <ProgressComponent />,
      counter: <CounterComponent />,
    };

    return componentMap[str];
  }

  return (
    <div ref={ref}>
      <div ref={drop} className={styles.diary_page}>
        {widgets.map((widget, index) => (
          <div className={styles.diary_page_div} key={index}>
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ComponentToPrint;
