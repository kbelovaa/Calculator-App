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
      <HistoryWrapper selectedTheme={this.context.onGetTheme}>
        <HistoryTitle>History</HistoryTitle>
        <HistoryList selectedTheme={this.context.onGetTheme}>
          {this.props.history.reverse().map((expression, index) => (
            <HistoryItem key={index}>{expression}</HistoryItem>
          ))}
        </HistoryList>
      </HistoryWrapper>
    );
  }
}

History.propTypes = {
  history: PropTypes.array,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
