import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from 'Utils/context';
import StyledButton from './styled';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const argument = this.props.valueToUse ?? this.props.value;
    this.props.onClick(argument);
  }

  static contextType = Context;

  render() {
    return (
      <StyledButton selectedTheme={this.context.onGetTheme} onClick={this.handleClick}>
        {this.props.value}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  valueToUse: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
