import React, { useState } from "react";
import { ItemTypes } from "../../constants/itemTypes";
import { useDrag } from "react-dnd";
import styles from "../../styles/diaryComponent.module.css";

const PictureDailyComponent = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD, //추후 수정
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [wordBlockWidth, setWordBlockWidth] = useState(50);

  const wordBlocks = (rowNum, ColNum) => {
    const widgets = [];

    for (let i = 0; i < ColNum; i++) {
      widgets.push(
        <td
          style={{
            width: wordBlockWidth + "px",
            height: wordBlockWidth + "px",
            border: "solid",
          }}
        ></td>
      );
    }
    const widget_total = [];
    for (let i = 0; i < rowNum; i++) {
      widget_total.push(<tr>{widgets}</tr>);
    }
    return <table style={{ borderCollapse: "collapse" }}>{widget_total}</table>;
  };

  return (
    <div
      ref={drag}
      tabIndex="0"
      className={styles.diaryComponents}
      style={{
        width: "100%",
      }}
    >
      <div style={{ border: "solid", height: "50px" }}></div>

      {wordBlocks(4, 10)}
    </div>
  );
};

export default PictureDailyComponent;
