export const addSquareBlock = (blockTypeStr) => {
  return {
    type: "SQUARE/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 120,
      color: 0.3,
      isRound: false,
    },
  };
};
export const addTextBlock = (blockTypeStr) => {
  return {
    type: "TEXT/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      font: "Noto Serif KR",
      height: 20,
      color: 0.3,
    },
  };
};
export const addLineBlock = (blockTypeStr) => {
  return {
    type: "LINE/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 1,
      color: 0.3,
    },
  };
};
export const addGridBlock = (blockTypeStr) => {
  return {
    type: "GRID/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      lineHeight: 21,
      height: 60,
      color: 0.3,
    },
  };
};
export const addDotGridBlock = (blockTypeStr) => {
  return {
    type: "DOTGRID/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      lineHeight: 20,
      height: 60,
      color: 0.3,
    },
  };
};
export const addRuledBlock = (blockTypeStr) => {
  return {
    type: "RULED/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 60,
      lineHeight: 20,
      color: 0.3,
    },
  };
};
export const addMonthTableBlock = (blockTypeStr) => {
  return {
    type: "MONTHTABLE/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 80,
      rowNum: 5,
      colNum: 7,
      color: 0.3,
      style: 0,
      totalNumStyle: 3,
    },
  };
};
export const addPictureDiaryBlock = (blockTypeStr) => {
  return {
    type: "PICTUREDIARY/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 200,
      rowNum: 4,
      colNum: 8,
      color: 0.3,
    },
  };
};
export const addChecklistBlock = (blockTypeStr) => {
  return {
    type: "CHECKLIST/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 10,
      color: 0.3,
      numChecklist: 3,
      style: 0,
      totalNumStyle: 3,
    },
  };
};
export const addCounterBlock = (blockTypeStr) => {
  return {
    type: "COUNTER/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 10,
      color: 0.3,
      counter: 15,
      style: 0,
      totalNumStyle: 3,
    },
  };
};

export const addCircularDailyBlock = (blockTypeStr) => {
  return {
    type: "CIRCULARDAILY/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 400,
      color: 0.3,
    },
  };
};
export const addDoubleCircularDailyBlock = (blockTypeStr) => {
  return {
    type: "DOUBLECIRCULARDAILY/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      height: 200,
      color: 0.3,
    },
  };
};

export const addShapeBlock = (blockTypeStr) => {
  return {
    type: "SHAPES/CREATE",
    payload: {
      id: Date.now(),
      blockType: blockTypeStr,
      totalNumStyle: 11,
      style: 0,
      height: 50,
      color: 0.3,
    },
  };
};
//------------------------------
export const incHeight = (id) => {
  return {
    type: "INCREASE_HEIGHT",
    payload: {
      id: id,
    },
  };
};

export const decHeight = (id) => {
  return {
    type: "DECREASE_HEIGHT",
    payload: {
      id: id,
    },
  };
};

export const incLineHeight = (id) => {
  return {
    type: "INCREASE_LINE_HEIGHT",
    payload: {
      id: id,
    },
  };
};

export const decLineHeight = (id) => {
  return {
    type: "DECREASE_LINE_HEIGHT",
    payload: {
      id: id,
    },
  };
};

export const incColor = (id) => {
  return {
    type: "INCREASE_COLOR",
    payload: {
      id: id,
    },
  };
};

export const decColor = (id) => {
  return {
    type: "DECREASE_COLOR",
    payload: {
      id: id,
    },
  };
};
export const incCounter = (id) => {
  return {
    type: "INCREASE_COUNTER",
    payload: {
      id: id,
    },
  };
};

export const decCounter = (id) => {
  return {
    type: "DECREASE_COUNTER",
    payload: {
      id: id,
    },
  };
};
export const incRow = (id) => {
  return {
    type: "INCREASE_ROWNUM",
    payload: {
      id: id,
    },
  };
};

export const decRow = (id) => {
  return {
    type: "DECREASE_ROWNUM",
    payload: {
      id: id,
    },
  };
};

export const incCol = (id) => {
  return {
    type: "INCREASE_COLNUM",
    payload: {
      id: id,
    },
  };
};

export const decCol = (id) => {
  return {
    type: "DECREASE_COLNUM",
    payload: {
      id: id,
    },
  };
};
export const incNameSpaceHeight = (id) => {
  return {
    type: "INCREASE_NAMESPACE",
    payload: {
      id: id,
    },
  };
};

export const decNameSpaceHeight = (id) => {
  return {
    type: "DECREASE_NAMESPACE",
    payload: {
      id: id,
    },
  };
};
export const incContentHeight = (id) => {
  return {
    type: "INCREASE_CONTENT",
    payload: {
      id: id,
    },
  };
};

export const decContentHeight = (id) => {
  return {
    type: "DECREASE_CONTENT",
    payload: {
      id: id,
    },
  };
};

export const incChecklist = (id) => {
  return {
    type: "INCREASE_CHECKLIST",
    payload: {
      id: id,
    },
  };
};

export const decChecklist = (id) => {
  return {
    type: "DECREASE_CHECKLIST",
    payload: {
      id: id,
    },
  };
};

export const changeIsRound = (id) => {
  return {
    type: "CHANGE_ISROUND",
    payload: {
      id: id,
    },
  };
};

export const deleteBlock = (id) => {
  return {
    type: "BLOCK_DELETE",
    payload: {
      id: id,
    },
  };
};

export const changeFont = (id, font) => {
  //적용 안되어 있음
  return {
    type: "CHANGE_FONT",
    payload: {
      id: id,
      font: font,
    },
  };
};

export const incStyleNum = (id) => {
  return {
    type: "INCREASE_STYLE_NUM",
    payload: {
      id: id,
    },
  };
};

export const decStyleNum = (id) => {
  return {
    type: "DECREASE_STYLE_NUM",
    payload: {
      id: id,
    },
  };
};
