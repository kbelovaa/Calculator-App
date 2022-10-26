import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from 'Utils/context';
import { ControlPanelWrapper, StyledControlButton } from './styled';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.clearHistory = this.clearHistory.bind(this);
  }

  clearHistory() {
    this.props.clearHistory();
    this.props.clearExpression();
  }

  static contextType = Context;

  render() {
    return (
      <ControlPanelWrapper selectedTheme={this.context.onGetTheme}>
        <StyledControlButton data-cy="btnOpenHist" selectedTheme={this.context.onGetTheme} onClick={this.props.showHistory}>
          {this.props.isHistoryOpen ? 'Hide history' : 'Show history'}
        </StyledControlButton>
        <StyledControlButton data-cy="btnClearAllHist" selectedTheme={this.context.onGetTheme} onClick={this.clearHistory}>
          Clear all history
        </StyledControlButton>
      </ControlPanelWrapper>
    );
  }
}

ControlPanel.propTypes = {
  clearHistory: PropTypes.func,
  clearExpression: PropTypes.func,
  showHistory: PropTypes.func,
  isHistoryOpen: PropTypes.bool,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
