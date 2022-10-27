import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import historyReducer from './reducers/historyReducer';
import themeReducer from './reducers/themeReducer';

const rootReducer = combineReducers({
  history: historyReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
