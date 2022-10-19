import styled from 'styled-components';

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  border-left: 2px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  padding: 10px 30px;
`;

const HistoryTitle = styled.h2`
  font-weight: normal;
  margin: 0 auto 20px;
`;

const HistoryList = styled.ul`
  list-style-type: none;
  overflow-y: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors[props.selectedTheme][0]};
  }
`;

const HistoryItem = styled.li`
  font-size: 20px;
  margin-bottom: 15px;
`;

export { HistoryWrapper, HistoryTitle, HistoryList, HistoryItem };
