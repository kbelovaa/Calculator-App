import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flex from 'Components/Flex';
import Button from 'Components/Button';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Keypad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex justify="space-around">
        <Flex direction="column" justify="end">
          <Button value="CE" onClick={this.props.onClearExpression} />
          <Button value="7" onClick={this.props.onEnter} />
          <Button value="4" onClick={this.props.onEnter} />
          <Button value="1" onClick={this.props.onEnter} />
          <Button value="+/-" onClick={this.props.onChangeSign} />
        </Flex>
        <Flex direction="column" justify="end">
          <Button value="C" onClick={this.props.onClearValue} />
          <Button value="8" onClick={this.props.onEnter} />
          <Button value="5" onClick={this.props.onEnter} />
          <Button value="2" onClick={this.props.onEnter} />
          <Button value="0" onClick={this.props.onEnter} />
        </Flex>
        <Flex direction="column" justify="end">
          <Button value="%" valueToUse={this.props.currentValue} onClick={this.props.onRemainder} />
          <Button value="9" onClick={this.props.onEnter} />
          <Button value="6" onClick={this.props.onEnter} />
          <Button value="3" onClick={this.props.onEnter} />
          <Button value="." onClick={this.props.onEnter} />
        </Flex>
        <Flex direction="column">
          <Button value={<FontAwesomeIcon icon={faDeleteLeft} />} onClick={this.props.onDelete} />
          <Button value="/" valueToUse={this.props.currentValue} onClick={this.props.onDivide} />
          <Button value="*" valueToUse={this.props.currentValue} onClick={this.props.onMultiply} />
          <Button value="-" valueToUse={this.props.currentValue} onClick={this.props.onSubstract} />
          <Button value="+" valueToUse={this.props.currentValue} onClick={this.props.onAdd} />
          <Button value="=" valueToUse={this.props.currentValue} onClick={this.props.onCalculate} />
        </Flex>
      </Flex>
    );
  }
}

Keypad.propTypes = {
  currentValue: PropTypes.string,
  onEnter: PropTypes.func,
  onClearExpression: PropTypes.func,
  onChangeSign: PropTypes.func,
  onClearValue: PropTypes.func,
  onRemainder: PropTypes.func,
  onDelete: PropTypes.func,
  onDivide: PropTypes.func,
  onMultiply: PropTypes.func,
  onSubstract: PropTypes.func,
  onAdd: PropTypes.func,
  onCalculate: PropTypes.func,
};
