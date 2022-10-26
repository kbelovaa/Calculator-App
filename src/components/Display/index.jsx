import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from 'Utils/context';
import { DisplayWrapper, ExpressionWrapper, InputWrapper } from './styled';

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = Context;

  render() {
    return (
      <DisplayWrapper selectedTheme={this.context.onGetTheme}>
        <ExpressionWrapper data-cy="displayExpr">{this.props.error ? '' : this.props.expression}</ExpressionWrapper>
        <InputWrapper data-cy="displayInput">{this.props.error ?? this.props.currentValue}</InputWrapper>
      </DisplayWrapper>
    );
  }
}

Display.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  expression: PropTypes.string,
  currentValue: PropTypes.string,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};
