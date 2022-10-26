import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { clearHistoryAction } from 'Store/actions/historyActions';
import StyledClearButton from './styled';

function ClearButton() {
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.theme.theme);

  function clearHistory() {
    dispatch(clearHistoryAction());
  }

  return (
    <StyledClearButton data-cy="btnClearHist" selectedTheme={selectedTheme} onClick={clearHistory}>
      Clear History
    </StyledClearButton>
  );
}

ClearButton.propTypes = {
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};

export default ClearButton;
