import styled from 'styled-components';

const ControlPanelWrapper = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  border-top: 2px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  padding: 10px;
`;

const StyledControlButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  padding: 7px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors[props.selectedTheme][3]};
  border: 1px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  border-radius: 7px;
  width: 160px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colors[props.selectedTheme][2]};
  }
`;

export { ControlPanelWrapper, StyledControlButton };
