import React from 'react';
import PropTypes from 'prop-types';
import StyledFlex from './styled';

function FlexFC(props) {
  return <StyledFlex {...props} />;
}

FlexFC.propTypes = {
  children: PropTypes.array,
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  margin: PropTypes.string,
};

export default FlexFC;
