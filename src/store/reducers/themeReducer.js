import { CHANGE_THEME } from 'Constants/actionsRedux';

const selectedTheme = localStorage.getItem('selectedTheme') !== null ? localStorage.getItem('selectedTheme') : 'light';

const defaultState = {
  theme: selectedTheme,
};

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export default themeReducer;
