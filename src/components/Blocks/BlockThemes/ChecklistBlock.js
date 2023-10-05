import React, { useState } from "react";

import { useFocus } from "../AdjustmentBar/hooks/adjustmentHooks";
import DiaryComponent from "../BlockWrapper";
import AdjustmentBar from "../AdjustmentBar/AdjustmentBar";
import { useSelector } from "react-redux";
import AdjustButton from "../AdjustmentBar/AdjustButton";
import {
  incColor,
  decColor,
  incChecklist,
  decChecklist,
  deleteBlock,
  incStyleNum,
  decStyleNum,
} from "../../../ReduxFiles/actions";
import { getColor } from "../common";
import styles from "../styles/Block.module.css";
import IncDecGroup from "../AdjustmentBar/IncDecGroup";
import StyleGroup from "../AdjustmentBar/StyleGroup";

const ChecklistComponent = (props) => {
  // const { isDragging, drag } = useDraggable();
  const [isFocused, setIsFocused, handleBlur] = useFocus();
  // const [numChecklist, increaseChecklist, decreaseChecklist] =
  //   useNumAttributeAdjuster(3, 1);
  // const [colorLightness, increaseColorLightness, decreaseColorLightness] =
  //   useNumAttributeAdjuster();
  const thisBlock = useSelector((state) =>
    state.find((block) => block.id === props.id)
  );
  const color = getColor(thisBlock.color);

  const UnderLineStyle = () => {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "10px",
            width: "3px",
            marginTop: "5px",
            marginBottom: "5px",
            marginLeft: "5px",
            marginRight: "4px",
            borderTop: "1px solid " + color,
            borderBottom: "1px solid " + color,
            borderLeft: "1px solid " + color,
          }}
        ></div>
        <div
          style={{
            height: "10px",
            width: "3px",
            marginTop: "5px",
            marginBottom: "5px",
            marginRight: "5px",
            borderTop: "1px solid " + color,
            borderBottom: "1px solid " + color,
            borderRight: "1px solid " + color,
          }}
        ></div>
      </div>
    );
  };
  const CircleStyle = () => {
    return (
      <div
        style={{
          height: "10px",
          width: "10px",
          margin: "5px",
          border: "1px solid " + color,
          borderRadius: "50%",
        }}
      ></div>
    );
  };
  const SquareStyle = () => {
    return (
      <div
        style={{
          height: "10px",
          width: "10px",
          margin: "5px",
          border: "1px solid " + color,
        }}
      ></div>
    );
  };
  const styleMap = {
    0: UnderLineStyle,
    1: CircleStyle,
    2: SquareStyle,
  };
  return (
    <DiaryComponent
      // drag={drag}
      setIsFocused={setIsFocused}
      handleBlur={handleBlur}
    >
      {oneCheckList(thisBlock.numChecklist)}

      {isFocused && (
        <AdjustmentBar>
          <StyleGroup
            inc={incStyleNum}
            dec={decStyleNum}
            label="스타일"
            id={props.id}
          />
          <IncDecGroup
            inc={incChecklist}
            dec={decChecklist}
            label="추가"
            id={props.id}
          />
          <IncDecGroup
            inc={incColor}
            dec={decColor}
            label="색깔"
            id={props.id}
          />

          <AdjustButton action={deleteBlock} label="x" id={props.id} />
        </AdjustmentBar>
      )}
    </DiaryComponent>
  );

  function oneCheckList(num) {
    let i = 0;
    const widgets = [];
    const StylePart = styleMap[thisBlock.style];
    for (i = 0; i < num; i++) {
      widgets.push(
        <div style={{ flexDirection: "row" }}>
          <StylePart />
          {/* 
          <div
            style={{
              height: "10px",
              width: "10px",
              margin: "5px",
              border: "1px solid " + color,
            }}
          ></div> */}
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: color,
            }}
          ></div>
        </div>
      );
    }
    return widgets;
  }
};

export default ChecklistComponent;
