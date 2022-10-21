import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from 'Utils/context';
import StyledButton from './styled';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = Context;

  render() {
    return (
      <StyledButton selectedTheme={this.context.onGetTheme} onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
