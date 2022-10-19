import { ADD_EXPRESSION, CLEAR_HISTORY } from 'Constants/actionsRedux';

const defaultState = {
  operationHistory: [],
};

const historyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_EXPRESSION:
      return { ...state, operationHistory: [...state.operationHistory, action.payload] };
    case CLEAR_HISTORY:
      return { ...state, operationHistory: [] };
    default:
      return state;
  }
};

export default historyReducer;
