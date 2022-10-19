import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors[props.selectedTheme][3]};
  border: 1px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  paddind: 7px;
  margin: 7px;
  width: 65px;
  height: 65px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colors[props.selectedTheme][2]};
  }
`;

export default StyledButton;
