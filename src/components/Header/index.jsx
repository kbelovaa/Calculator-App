import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Flex from 'Components/Flex';
import Context from 'Utils/context';
import { HeaderWrapper, HeaderTitle, MenuTitle } from './styled';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomeOpen: true,
    };
  }

  componentDidMount() {
    const path = window.location.href.slice(22);
    if (path === 'settings') {
      this.setState({ isHomeOpen: false });
    } else {
      this.setState({ isHomeOpen: true });
    }
  }

  static contextType = Context;

  render() {
    return (
      <HeaderWrapper selectedTheme={this.context.onGetTheme}>
        <Flex justify="space-between">
          <HeaderTitle selectedTheme={this.context.onGetTheme}>Calculator App</HeaderTitle>
          <Flex>
            <Link to="/">
              <MenuTitle
                selectedTheme={this.context.onGetTheme}
                isHomeOpen={this.state.isHomeOpen}
                onClick={() => this.setState({ isHomeOpen: true })}
              >
                Home
              </MenuTitle>
            </Link>
            <Link to="/settings">
              <MenuTitle
                selectedTheme={this.context.onGetTheme}
                isSettingsOpen={!this.state.isHomeOpen}
                onClick={() => this.setState({ isHomeOpen: false })}
              >
                Settings
              </MenuTitle>
            </Link>
          </Flex>
        </Flex>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
  isHomeOpen: PropTypes.bool,
  isSettingsOpen: PropTypes.bool,
};
