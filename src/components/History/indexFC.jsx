import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { HistoryWrapper, HistoryTitle, HistoryList, HistoryItem } from './styled';

function HistoryFC() {
  const theme = useSelector((state) => state.theme.theme);
  const history = useSelector((state) => state.history.operationHistory);

  return (
    <HistoryWrapper data-cy="historyWrap" selectedTheme={theme}>
      <HistoryTitle>History</HistoryTitle>
      <HistoryList data-cy="historyList" selectedTheme={theme}>
        {history.map((expression, index) => (
          <HistoryItem key={index}>{expression}</HistoryItem>
        ))}
      </HistoryList>
    </HistoryWrapper>
  );
}

HistoryFC.propTypes = {
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};

export default HistoryFC;
