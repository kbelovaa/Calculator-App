import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 200px;
  padding: 12px;
  font-size: 18px;
  background-color: ${(props) => props.theme.colors[props.selectedTheme][3]};
  border: 1px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  &:focus {
    outline: none;
  }
`;

const StyledOption = styled.option``;

export { StyledSelect, StyledOption };
