import styled, { createGlobalStyle } from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors[props.selectedTheme][4]};
  background-color: ${(props) => props.theme.colors[props.selectedTheme][1]};
`;

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
}
`;

export { AppWrapper, GlobalStyle };
