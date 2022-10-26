import React from 'react';
import PropTypes from 'prop-types';
import FlexFC from 'Components/Flex/indexFC';
import ButtonFC from 'Components/Button/indexFC';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function KeypadFC(props) {
  return (
    <FlexFC justify="space-around">
      <FlexFC direction="column" justify="end">
        <ButtonFC value="CE" onClick={props.onClearExpression} cy="btnCE" />
        <ButtonFC value="7" onClick={props.onEnter} cy="btn7" />
        <ButtonFC value="4" onClick={props.onEnter} cy="btn4" />
        <ButtonFC value="1" onClick={props.onEnter} cy="btn1" />
        <ButtonFC value="+/-" onClick={props.onChangeSign} cy="btn+-" />
      </FlexFC>
      <FlexFC direction="column" justify="end">
        <ButtonFC value="C" onClick={props.onClearValue} cy="btnC" />
        <ButtonFC value="8" onClick={props.onEnter} cy="btn8" />
        <ButtonFC value="5" onClick={props.onEnter} cy="btn5" />
        <ButtonFC value="2" onClick={props.onEnter} cy="btn2" />
        <ButtonFC value="0" onClick={props.onEnter} cy="btn0" />
      </FlexFC>
      <FlexFC direction="column" justify="end">
        <ButtonFC value="%" onClick={props.onExecuteCommand} cy="btn%" />
        <ButtonFC value="9" onClick={props.onEnter} cy="btn9" />
        <ButtonFC value="6" onClick={props.onEnter} cy="btn6" />
        <ButtonFC value="3" onClick={props.onEnter} cy="btn3" />
        <ButtonFC value="." onClick={props.onEnter} cy="btn." />
      </FlexFC>
      <FlexFC direction="column">
        <ButtonFC value={<FontAwesomeIcon icon={faDeleteLeft} />} onClick={props.onDelete} cy="btnDel" />
        <ButtonFC value="/" onClick={props.onExecuteCommand} cy="btn/" />
        <ButtonFC value="*" onClick={props.onExecuteCommand} cy="btn*" />
        <ButtonFC value="-" onClick={props.onExecuteCommand} cy="btn-" />
        <ButtonFC value="+" onClick={props.onExecuteCommand} cy="btn+" />
        <ButtonFC value="=" onClick={props.onExecuteCommand} cy="btn=" />
      </FlexFC>
    </FlexFC>
  );
}

KeypadFC.propTypes = {
  onEnter: PropTypes.func,
  onExecuteCommand: PropTypes.func,
  onClearExpression: PropTypes.func,
  onChangeSign: PropTypes.func,
  onClearValue: PropTypes.func,
  onDelete: PropTypes.func,
};

export default KeypadFC;
