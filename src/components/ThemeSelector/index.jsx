import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import changeThemeAction from 'Store/actions/themeActions';
import { StyledSelect, StyledOption } from './styled';

function ThemeSelector() {
  const selectedTheme = useSelector((state) => state.theme.theme);

  const [selectValue, setSelectValue] = useState(selectedTheme);

  const dispatch = useDispatch();

  function changeTheme(theme) {
    setSelectValue(theme);
    dispatch(changeThemeAction(theme));
    localStorage.setItem('selectedTheme', theme);
  }

  return (
    <StyledSelect
      selectedTheme={selectedTheme}
      value={selectValue}
      onChange={(event) => changeTheme(event.target.value)}
    >
      <option value="light">Light theme</option>
      <option value="colored">Colored theme</option>
      <option value="dark">Dark theme</option>
    </StyledSelect>
  );
}

ThemeSelector.propTypes = {
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};

export default ThemeSelector;
