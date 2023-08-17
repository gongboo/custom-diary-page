import React, { useState } from "react";
import { ItemTypes } from "../../Constants/itemTypes";
import { useDrag } from "react-dnd";
import { useDraggable } from "../hooks/useDraggable";
import {
  useNumAttributeAdjuster,
  useFocus,
} from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";
import AdjustButton from "../AdjustmentBar/AdjustButton";
import {
  incHeight,
  decHeight,
  incColor,
  decColor,
  deleteBlock,
  incRow,
  decRow,
  incCol,
  decCol,
  incNameSpaceHeight,
  decNameSpaceHeight,
  incContentHeight,
  decContentHeight,
  incCounter,
  decCounter,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
const CounterComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  // const [colorLineThickness, setColorLineThickness] = useState(50);

  // const [countNum, increaseCountNum, decreaseCountNum] =
  //   useNumAttributeAdjuster(20, 1);
  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();

  // const color = "hsl(0,0%," + colorLightness + "%)";
  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);
  const oneParticle = (num) => {
    return (
      <div
        style={{
          border: "solid " + color,
          padding: "5px",
          width: "20px",
          color: color,
        }}
      >
        {num}
      </div>
    );
  };

  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", //"space-between", //"center",
        }}
      >
        {Array.from({ length: thisBlock.counter }).map((_, i) =>
          oneParticle(i + 1)
        )}
      </div>
      {isFocused && (
        <AdjustmentBar onDelete={props.onDelete} id={props.id}>
          <AdjustButton action={incCounter} label="+" id={props.id} />
          갯수
          <AdjustButton action={decCounter} label="-" id={props.id} />
          <AdjustButton action={incColor} label="+" id={props.id} />
          색깔
          <AdjustButton action={decColor} label="-" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );
};

export default CounterComponent;
