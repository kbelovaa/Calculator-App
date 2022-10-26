import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import StyledButton from './styled';

function ButtonFC(props) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <StyledButton selectedTheme={theme} onClick={() => props.onClick(props.value)}>
      {props.value}
    </StyledButton>
  );
}

ButtonFC.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  theme: PropTypes.object,
  selectedTheme: PropTypes.string,
};

export default ButtonFC;
