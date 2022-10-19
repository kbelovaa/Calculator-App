import { CHANGE_THEME } from 'Constants/actionsRedux';

const changeThemeAction = (payload) => ({
  type: CHANGE_THEME,
  payload,
});

export default changeThemeAction;
