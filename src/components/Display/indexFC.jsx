import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { DisplayWrapper, ExpressionWrapper, InputWrapper } from './styled';

function DisplayFC(props) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <DisplayWrapper selectedTheme={theme}>
      <ExpressionWrapper>{props.error ? '' : props.expression}</ExpressionWrapper>
      <InputWrapper>{props.error ?? props.currentValue}</InputWrapper>
    </DisplayWrapper>
  );
}

DisplayFC.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  expression: PropTypes.string,
  currentValue: PropTypes.string,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};

export default DisplayFC;
