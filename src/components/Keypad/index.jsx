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
          <Button value="CE" onClick={this.props.onClearExpression} cy="btnCE" />
          <Button value="7" onClick={this.props.onEnter} cy="btn7" />
          <Button value="4" onClick={this.props.onEnter} cy="btn4" />
          <Button value="1" onClick={this.props.onEnter} cy="btn1" />
          <Button value="+/-" onClick={this.props.onChangeSign} cy="btn+-" />
        </Flex>
        <Flex direction="column" justify="end">
          <Button value="C" onClick={this.props.onClearValue} cy="btnC" />
          <Button value="8" onClick={this.props.onEnter} cy="btn8" />
          <Button value="5" onClick={this.props.onEnter} cy="btn5" />
          <Button value="2" onClick={this.props.onEnter} cy="btn2" />
          <Button value="0" onClick={this.props.onEnter} cy="btn0" />
        </Flex>
        <Flex direction="column" justify="end">
          <Button value="%" onClick={this.props.onExecuteCommand} cy="btn%" />
          <Button value="9" onClick={this.props.onEnter} cy="btn9" />
          <Button value="6" onClick={this.props.onEnter} cy="btn6" />
          <Button value="3" onClick={this.props.onEnter} cy="btn3" />
          <Button value="." onClick={this.props.onEnter} cy="btn." />
        </Flex>
        <Flex direction="column">
          <Button value={<FontAwesomeIcon icon={faDeleteLeft} />} onClick={this.props.onDelete} cy="btnDel" />
          <Button value="/" onClick={this.props.onExecuteCommand} cy="btn/" />
          <Button value="*" onClick={this.props.onExecuteCommand} cy="btn*" />
          <Button value="-" onClick={this.props.onExecuteCommand} cy="btn-" />
          <Button value="+" onClick={this.props.onExecuteCommand} cy="btn+" />
          <Button value="=" onClick={this.props.onExecuteCommand} cy="btn=" />
        </Flex>
      </Flex>
    );
  }
}

Keypad.propTypes = {
  onEnter: PropTypes.func,
  onExecuteCommand: PropTypes.func,
  onClearExpression: PropTypes.func,
  onChangeSign: PropTypes.func,
  onClearValue: PropTypes.func,
  onDelete: PropTypes.func,
};
