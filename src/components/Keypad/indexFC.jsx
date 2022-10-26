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
        <ButtonFC value="CE" onClick={props.onClearExpression} />
        <ButtonFC value="7" onClick={props.onEnter} />
        <ButtonFC value="4" onClick={props.onEnter} />
        <ButtonFC value="1" onClick={props.onEnter} />
        <ButtonFC value="+/-" onClick={props.onChangeSign} />
      </FlexFC>
      <FlexFC direction="column" justify="end">
        <ButtonFC value="C" onClick={props.onClearValue} />
        <ButtonFC value="8" onClick={props.onEnter} />
        <ButtonFC value="5" onClick={props.onEnter} />
        <ButtonFC value="2" onClick={props.onEnter} />
        <ButtonFC value="0" onClick={props.onEnter} />
      </FlexFC>
      <FlexFC direction="column" justify="end">
        <ButtonFC value="%" onClick={props.onExecuteCommand} />
        <ButtonFC value="9" onClick={props.onEnter} />
        <ButtonFC value="6" onClick={props.onEnter} />
        <ButtonFC value="3" onClick={props.onEnter} />
        <ButtonFC value="." onClick={props.onEnter} />
      </FlexFC>
      <FlexFC direction="column">
        <ButtonFC value={<FontAwesomeIcon icon={faDeleteLeft} />} onClick={props.onDelete} />
        <ButtonFC value="/" onClick={props.onExecuteCommand} />
        <ButtonFC value="*" onClick={props.onExecuteCommand} />
        <ButtonFC value="-" onClick={props.onExecuteCommand} />
        <ButtonFC value="+" onClick={props.onExecuteCommand} />
        <ButtonFC value="=" onClick={props.onExecuteCommand} />
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
