import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ControlPanelWrapper, StyledControlButton } from './styled';

function ControlPanelFC(props) {
  const theme = useSelector((state) => state.theme.theme);

  function clearHistory() {
    props.clearHistory();
    props.clearExpression();
  }

  return (
    <ControlPanelWrapper selectedTheme={theme}>
      <StyledControlButton data-cy="btnOpenHist" selectedTheme={theme} onClick={props.showHistory}>
        {props.isHistoryOpen ? 'Hide history' : 'Show history'}
      </StyledControlButton>
      <StyledControlButton data-cy="btnClearAllHist" selectedTheme={theme} onClick={clearHistory}>
        Clear all history
      </StyledControlButton>
    </ControlPanelWrapper>
  );
}

ControlPanelFC.propTypes = {
  clearHistory: PropTypes.func,
  clearExpression: PropTypes.func,
  showHistory: PropTypes.func,
  isHistoryOpen: PropTypes.bool,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};

export default ControlPanelFC;
