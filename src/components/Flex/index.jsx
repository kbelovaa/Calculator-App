import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledFlex from './styled';

export default class Flex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <StyledFlex {...this.props} />;
  }
}

Flex.propTypes = {
  children: PropTypes.array,
  direction: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  margin: PropTypes.string,
};
