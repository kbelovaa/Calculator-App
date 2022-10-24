import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flex from 'Components/Flex';
import Context from 'Utils/context';
import { HeaderWrapper, HeaderTitle, StyledNavLink } from './styled';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = Context;

  render() {
    return (
      <HeaderWrapper selectedtheme={this.context.onGetTheme}>
        <Flex justify="space-between">
          <HeaderTitle selectedtheme={this.context.onGetTheme}>Calculator App</HeaderTitle>
          <Flex>
            <StyledNavLink to="/" selectedtheme={this.context.onGetTheme} end>
              Home
            </StyledNavLink>
            <StyledNavLink to="/settings" selectedtheme={this.context.onGetTheme}>
              Settings
            </StyledNavLink>
          </Flex>
        </Flex>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  theme: PropTypes.object,
  selectedtheme: PropTypes.string,
};
