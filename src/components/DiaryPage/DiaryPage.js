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
  addRuledBlock,
  addCircularDailyBlock,
  addDoubleCircularDailyBlock,
  addMonthTableBlock,
  addPictureDiaryBlock,
  addCounterBlock,
} from "../../ReduxFiles/actions";

import LineComponent from "../Blocks/BlockThemes/LineBlock";
import BoxComponent from "../Blocks/BlockThemes/SquareBlock";
import DotgridComponent from "../Blocks/BlockThemes/DotgridBlock";
import GridComponent from "../Blocks/BlockThemes/GridBlock";
import TextComponent from "../Blocks/BlockThemes/TextBlock";
import RuledComponent from "../Blocks/BlockThemes/RuledBlock";
import ChecklistComponent from "../Blocks/BlockThemes/ChecklistBlock";
import CircularDailyComponent from "../Blocks/BlockThemes/CircularDailyBlock";
import DoubleCircularDailyComponent from "../Blocks/BlockThemes/DoubleCircularDailyBlock";
import MonthTableComponent from "../Blocks/BlockThemes/MonthTableBlock";
import PictureDailyComponent from "../Blocks/BlockThemes/PictureDailyBlock";
// import ProgressComponent from "../Blocks/progressComponent";
import CounterComponent from "../Blocks/BlockThemes/CounterBlock";
import { v4 as uuidv4 } from "uuid";

const DiaryPage = React.forwardRef((props, ref) => {
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
      ruled: () => {
        dispatch(addRuledBlock(item.name));
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

  function findBlock(str, id) {
    const componentMap = {
      line: () => <LineComponent id={id} />,
      square: () => <BoxComponent id={id} />,
      text: () => <TextComponent id={id} />,
      checklist: () => <ChecklistComponent id={id} />,
      grid: () => <GridComponent id={id} />,
      dotgrid: () => <DotgridComponent id={id} />,
      ruled: () => <RuledComponent id={id} />,
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
    <div ref={ref} style={{ margin: 0, padding: 0 }}>
      <div
        ref={drop}
        className={styles.diary_page + " diary_page"}
        style={{
          ...(props.holeDirection === "top"
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
            : {}),
          ...(props.holeDirection === "down"
            ? {
                padding:
                  props.pad +
                  "px " +
                  props.pad +
                  "px " +
                  (parseInt(props.pad) + parseInt(props.holeSpace)) +
                  "px " +
                  props.pad +
                  "px ",
              }
            : {}),
          ...(props.holeDirection === "left"
            ? {
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
            : {}),
          ...(props.holeDirection === "right"
            ? {
                padding:
                  props.pad +
                  "px " +
                  (parseInt(props.pad) + parseInt(props.holeSpace)) +
                  "px " +
                  props.pad +
                  "px " +
                  props.pad +
                  "px ",
              }
            : {}),
        }}
      >
        {blocks.map((block) => (
          <div key={block.id}>{findBlock(block.blockType, block.id)}</div>
        ))}
      </div>
    </div>
  );
});

export default DiaryPage;
