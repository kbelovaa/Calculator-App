import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.colors[props.selectedtheme][0]};
  padding: 30px;
  font-size: 22px;
`;

const HeaderTitle = styled.span`
  color: ${(props) => props.theme.colors[props.selectedtheme][1]};
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors[props.selectedtheme][2]};
  margin-left: 30px;
  transition: all 0.3s ease-out;
  position: relative;
  &::after {
    display: block;
    content: '';
    background-color: ${(props) => props.theme.colors[props.selectedtheme][1]};
    width: 100%;
    height: 2px;
    position: absolute;
    right: 0;
    transition: all 0.3s ease-out;
    opacity: 0;
  }
  &:hover {
    color: ${(props) => props.theme.colors[props.selectedtheme][1]};
    cursor: pointer;
  }
  &:hover::after {
    opacity: 1;
  }
  &.active {
    color: ${(props) => props.theme.colors[props.selectedtheme][1]};
    &::after {
      opacity: 1;
    }
  }
`;

export { HeaderWrapper, HeaderTitle, StyledNavLink };
