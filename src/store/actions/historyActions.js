import { ADD_EXPRESSION, CLEAR_HISTORY } from 'Constants/actionsRedux';

export const addExpressionAction = (payload) => ({
  type: ADD_EXPRESSION,
  payload,
});

export const clearHistoryAction = (payload) => ({
  type: CLEAR_HISTORY,
  payload,
});
