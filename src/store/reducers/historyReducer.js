import { ADD_EXPRESSION, CLEAR_HISTORY } from 'Constants/actionsRedux';

const defaultState = {
  operationHistory: [],
};

const historyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EXPRESSION:
      return { ...state, operationHistory: [action.payload, ...state.operationHistory] };
    case CLEAR_HISTORY:
      return { ...state, operationHistory: [] };
    default:
      return state;
  }
};

export default historyReducer;
