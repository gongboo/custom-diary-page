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

  function onDelete(deletedWidgetId) {
    setWidgets(() => [
      widgets.filter((widget) => widget.id !== deletedWidgetId),
    ]);
  }

  function findComponent(str) {
    const componentMap = {
      line: <LineComponent onDelete={onDelete} />,
      square: <BoxComponent onDelete={onDelete} />,
      text: <TextComponent onDelete={onDelete} />,
      checklist: <ChecklistComponent onDelete={onDelete} />,
      grid: <GridComponent onDelete={onDelete} />,
      dotgrid: <DotgridComponent onDelete={onDelete} />,
      circularDaily: <CircularDailyComponent onDelete={onDelete} />,
      doublecircularDaily: <DoubleCircularDailyComponent onDelete={onDelete} />,
      monthTable: <MonthTableComponent onDelete={onDelete} />,
      pictureDiary: <PictureDailyComponent onDelete={onDelete} />,
      // progressBar: <ProgressComponent onDelete={onDelete}/>,
      counter: <CounterComponent onDelete={onDelete} />,
    };

    return componentMap[str];
  }

  return (
    <div ref={ref}>
      <div
        ref={drop}
        className={styles.diary_page}
        style={
          props.holeDirection === "top"
            ? {
                padding:
                  parseInt(props.pad) +
                  parseInt(props.holeSpace) +
                  "px " +
                  props.pad +
                  "px " +
                  props.pad +
                  "px " +
                  props.pad +
                  "px ",
              }
            : {
                padding:
                  props.pad +
                  "px " +
                  props.pad +
                  "px " +
                  props.pad +
                  "px " +
                  (parseInt(props.pad) + parseInt(props.holeSpace)) +
                  "px",
              }
        }
      >
        {widgets.map((widget, index) => (
          <div className={styles.diary_page_div} key={widget.id}>
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ComponentToPrint;
