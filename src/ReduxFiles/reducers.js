// import {
//   ADD_BLOCK,
//   SET_BLOCK_ATTR,
//   INCREASE_BLOCK_ATTR,
//   INCREASE_HEIGHT_BLOCK_ATTR,
//   DECREASE_BLOCK_ATTR,
//   DELETE_BLOCK,
// } from "./actions";

const blocks = [];
// const handlers = {};

const blocksReducer = (state = blocks, action) => {
  // const handler = handlers[action.type];
  // return handler ? handler(state, action) : state;
  switch (action.type) {
    case "SQUARE/CREATE":
      return [...state, action.payload];
    case "TEXT/CREATE":
      return [...state, action.payload];
    case "LINE/CREATE":
      return [...state, action.payload];
    case "GRID/CREATE":
      return [...state, action.payload];
    case "RULED/CREATE":
      return [...state, action.payload];
    case "DOTGRID/CREATE":
      return [...state, action.payload];
    case "MONTHTABLE/CREATE":
      return [...state, action.payload];
    case "PICTUREDIARY/CREATE":
      return [...state, action.payload];
    case "CHECKLIST/CREATE":
      return [...state, action.payload];
    case "COUNTER/CREATE":
      return [...state, action.payload];
    case "CIRCULARDAILY/CREATE":
      return [...state, action.payload];
    case "DOUBLECIRCULARDAILY/CREATE":
      return [...state, action.payload];

    case "BLOCK_DELETE":
      return state.filter((block) => block.id !== action.payload.id);

    case "INCREASE_HEIGHT":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              height: block.height + 20,
            }
          : block
      );

    case "DECREASE_HEIGHT":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              height: block.height - 20,
            }
          : block
      );
    case "INCREASE_ROWNUM":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              rowNum: block.rowNum + 1,
            }
          : block
      );

    case "DECREASE_ROWNUM":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              rowNum: block.rowNum - 1,
            }
          : block
      );
    case "INCREASE_COLNUM":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              colNum: block.colNum + 1,
            }
          : block
      );

    case "DECREASE_COLNUM":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              colNum: block.colNum - 1,
            }
          : block
      );
    case "INCREASE_COLOR":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              color: block.color + 0.1,
            }
          : block
      );

    case "DECREASE_COLOR":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              color: block.color - 0.1,
            }
          : block
      );
    case "INCREASE_NAMESPACE":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              nameSpaceHeight: block.nameSpaceHeight + 20,
            }
          : block
      );

    case "DECREASE_NAMESPACE":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              nameSpaceHeight: block.nameSpaceHeight - 20,
            }
          : block
      );
    case "INCREASE_CONTENT":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              contentHeight: block.contentHeight + 20,
            }
          : block
      );

    case "DECREASE_CONTENT":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              contentHeight: block.contentHeight - 20,
            }
          : block
      );

    case "INCREASE_COUNTER":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              counter: block.counter + 1,
            }
          : block
      );

    case "DECREASE_COUNTER":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              counter: block.counter - 1,
            }
          : block
      );

    case "INCREASE_CHECKLIST":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              numChecklist: block.numChecklist + 1,
            }
          : block
      );

    case "DECREASE_CHECKLIST":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              numChecklist: block.numChecklist - 1,
            }
          : block
      );

    case "CHANGE_ISROUND":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              isRound: !block.isRound,
            }
          : block
      );

    case "CHANGE_FONT": //적용 안되어 있음
      return state.map((block, font) =>
        block.id === action.payload.id
          ? {
              ...block,
              font: font, //어 잠깐만
            }
          : block
      );
    case "INCREASE_STYLE_NUM":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              style: (block.style + 1) % block.totalNumStyle,
            }
          : block
      );

    case "DECREASE_STYLE_NUM":
      return state.map((block) =>
        block.id === action.payload.id
          ? {
              ...block,
              style:
                (((block.style - 1) % block.totalNumStyle) +
                  block.totalNumStyle) %
                block.totalNumStyle,
            }
          : block
      );

    default:
      return state;
  }
};

export default blocksReducer;
