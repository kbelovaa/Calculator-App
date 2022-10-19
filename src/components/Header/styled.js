import styled, { css } from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors[props.selectedTheme][0]};
  padding: 30px;
  font-size: 22px;
`;

const HeaderTitle = styled.span`
  color: ${(props) => props.theme.colors[props.selectedTheme][1]};
`;

const MenuTitle = styled.span`
  color: ${(props) => props.theme.colors[props.selectedTheme][2]};
  margin-left: 30px;
  transition: all 0.3s ease-out;
  position: relative;
  &::after {
    display: block;
    content: '';
    background-color: ${(props) => props.theme.colors[props.selectedTheme][1]};
    width: 100%;
    height: 2px;
    position: absolute;
    right: 0;
    transition: all 0.3s ease-out;
    opacity: 0;
  }
  &:hover {
    color: ${(props) => props.theme.colors[props.selectedTheme][1]};
    cursor: pointer;
  }
  &:hover::after {
    opacity: 1;
  }

  ${(props) => props.isHomeOpen
    && css`
      color: ${(props) => props.theme.colors[props.selectedTheme][1]};
      &::after {
        opacity: 1;
      }
    `}

  ${(props) => props.isSettingsOpen
    && css`
      color: ${(props) => props.theme.colors[props.selectedTheme][1]};
      &::after {
        opacity: 1;
      }
    `}
`;

export { HeaderWrapper, HeaderTitle, MenuTitle };
