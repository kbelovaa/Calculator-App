import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from 'Utils/context';
import { HistoryWrapper, HistoryTitle, HistoryList, HistoryItem } from './styled';

export default class History extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = Context;

  render() {
    return (
      <HistoryWrapper data-cy="historyWrap" selectedTheme={this.context.onGetTheme}>
        <HistoryTitle>History</HistoryTitle>
        <HistoryList data-cy="historyList" selectedTheme={this.context.onGetTheme}>
          {this.context.onShowHistory.map((expression, index) => (
            <HistoryItem key={index}>{expression}</HistoryItem>
          ))}
        </HistoryList>
      </HistoryWrapper>
    );
  }
}

History.propTypes = {
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
