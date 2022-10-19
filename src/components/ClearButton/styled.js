import styled from 'styled-components';

const StyledClearButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  padding: 12px;
  text-align: left;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors[props.selectedTheme][3]};
  border: 1px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  border-radius: 4px;
  width: 200px;
  height: 50px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${(props) => props.theme.colors[props.selectedTheme][2]};
  }
`;

export default StyledClearButton;
