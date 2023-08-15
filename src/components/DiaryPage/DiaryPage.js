import styles from "./styles/DiaryPage.module.css";
import React, { useState } from "react";
import { ItemTypes } from "../Constants/itemTypes";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import {
  addSquareBlock,
  addLineBlock,
  addTextBlock,
  addChecklistBlock,
  addGridBlock,
  addDotGridBlock,
  addCircularDailyBlock,
  addDoubleCircularDailyBlock,
  addMonthTableBlock,
  addPictureDiaryBlock,
  addCounterBlock,
} from "../../ReduxFiles/actions";

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
import { v4 as uuidv4 } from "uuid";

const ComponentToPrint = React.forwardRef((props, ref) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const blocks = useSelector((state) => state);

  const dispatch = useDispatch();

  const [widgets, setWidgets] = useState([]);

  function onDrop(item) {
    const componentMap = {
      line: () => {
        dispatch(addLineBlock(item.name));
      },
      square: () => {
        dispatch(addSquareBlock(item.name));
      },
      text: () => {
        dispatch(addTextBlock(item.name));
      },
      checklist: () => {
        dispatch(addChecklistBlock(item.name));
      },
      grid: () => {
        dispatch(addGridBlock(item.name));
      },
      dotgrid: () => {
        dispatch(addDotGridBlock(item.name));
      },
      circularDaily: () => {
        dispatch(addCircularDailyBlock(item.name));
      },
      doublecircularDaily: () => {
        dispatch(addDoubleCircularDailyBlock(item.name));
      },
      monthTable: () => {
        dispatch(addMonthTableBlock(item.name));
      },
      pictureDiary: () => {
        dispatch(addPictureDiaryBlock(item.name));
      },
      // progressBar: <ProgressComponent onDelete={onDelete}/>,
      counter: () => {
        dispatch(addCounterBlock(item.name));
      },
    };
    const temp = componentMap[item.name];

    if (temp) {
      return temp();
    }
  }

  // function onDelete(deletedWidgetId) {
  //   console.log("ondelete the id is " + deletedWidgetId);
  //   console.log(widgets);
  //   setWidgets(() => [
  //     widgets.filter((widget) => widget.id !== deletedWidgetId),
  //   ]);
  // }

  function findBlock(str, id) {
    const componentMap = {
      line: () => <LineComponent id={id} />,
      square: () => <BoxComponent id={id} />,
      text: () => <TextComponent id={id} />,
      checklist: () => <ChecklistComponent id={id} />,
      grid: () => <GridComponent id={id} />,
      dotgrid: () => <DotgridComponent id={id} />,
      circularDaily: () => <CircularDailyComponent id={id} />,
      doublecircularDaily: () => <DoubleCircularDailyComponent id={id} />,
      monthTable: () => <MonthTableComponent id={id} />,
      pictureDiary: () => <PictureDailyComponent id={id} />,
      // progressBar: <ProgressComponent id={id} />,
      counter: () => <CounterComponent id={id} />,
    };

    const createComponent = componentMap[str];

    if (createComponent) {
      return createComponent();
    }

    return null;
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
        {/* {widgets.map((widget, index) => (
          <div className={styles.diary_page_div} key={index}>
            {widget.component}
          </div>
        ))}
        redux */}
        {blocks.map((block) => (
          <div key={block.id}>{findBlock(block.blockType, block.id)}</div>
        ))}
      </div>
    </div>
  );
});

export default ComponentToPrint;
