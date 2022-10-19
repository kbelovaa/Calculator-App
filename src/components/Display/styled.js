import styled from 'styled-components';

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  border-bottom: 2px solid ${(props) => props.theme.colors[props.selectedTheme][0]};
  width: 400px;
  height: 105px;
  padding: 15px;
`;

const ExpressionWrapper = styled.div`
  font-size: 20px;
  align-self: end;
  height: 23px;
`;

const InputWrapper = styled.div`
  font-size: 35px;
  font-weight: bold;
  align-self: end;
  margin-top: 5px;
`;

export { DisplayWrapper, ExpressionWrapper, InputWrapper };
