import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FlexFC from 'Components/Flex/indexFC';
import DisplayFC from 'Components/Display/indexFC';
import KeypadFC from 'Components/Keypad/indexFC';
import ControlPanelFC from 'Components/ControlPanel/indexFC';
import HistoryFC from 'Components/History/indexFC';
import {
  CalculatorCore,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  CalculateRemainderCommand,
} from 'Utils/calculator';
import { addExpressionAction, clearHistoryAction } from 'Store/actions/historyActions';
import { roundValue, makeCorrectRealNumber } from 'Utils/transformationFunctions';

const calculator = new CalculatorCore();

export default function CalculatorFC() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [expression, setExpression] = useState('');
  const [commands, setCommands] = useState([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);
  const [error, setError] = useState(null);

  function handleClearExpression() {
    calculator.clearValue();
    setValue('');
    setExpression('');
    setCommands([]);
    setError(null);
  }

  useEffect(() => {
    if (expression[expression.length - 1] === '=') {
      dispatch(addExpressionAction(expression.slice(0, -1)));
      calculator.clearValue();
    }
  }, [expression]);

  function updateInfo(command) {
    if (command === '=' && commands.length > 0) {
      setExpression((prevExpression) => `${prevExpression}${Number(makeCorrectRealNumber(value))}=`);
      setValue(roundValue(calculator.value));
      setCommands([]);
    } else if (command === '=' && commands.length === 0) {
      handleClearExpression();
    } else {
      if (commands.length > 0) {
        dispatch(addExpressionAction(`${expression}${Number(makeCorrectRealNumber(value))}`));
      }
      setValue('');
      setExpression(calculator.value + command);
    }
  }

  function handleEnterSymbol(symbol) {
    if (error !== null) {
      handleClearExpression();
    }
    if (symbol === '.' && value.indexOf('.') !== -1) {
      return;
    }
    if (symbol === '0' && value.slice(0, 1) === '0' && value.indexOf('.') === -1) {
      return;
    }
    if (symbol !== '.' && value === '0') {
      setValue(symbol);
      return;
    }
    setValue((prevValue) => prevValue + symbol);
  }

  function handleExecuteCommand(command) {
    if (error !== null) {
      handleClearExpression();
    }
    if (commands.length === 0) {
      calculator.executeCommand(new AddCommand(value));
    }
    if (commands.length > 0) {
      try {
        switch (commands[commands.length - 1]) {
          case '+':
            calculator.executeCommand(new AddCommand(value));
            break;
          case '-':
            calculator.executeCommand(new SubtractCommand(value));
            break;
          case '*':
            calculator.executeCommand(new MultiplyCommand(value));
            break;
          case '/':
            if (Number(makeCorrectRealNumber(value)) === 0) {
              throw new Error("Can't divide by zero");
            }
            calculator.executeCommand(new DivideCommand(value));
            break;
          case '%':
            if (Number(makeCorrectRealNumber(value)) === 0) {
              throw new Error("Can't divide by zero");
            }
            calculator.executeCommand(new CalculateRemainderCommand(value));
            break;
          default:
            break;
        }
      } catch (err) {
        setValue('');
        setExpression('');
        setCommands([]);
        setError(err.message);
        return;
      }
    }
    setCommands((prevCommands) => [...prevCommands, command]);
    updateInfo(command);
  }

  function handleChangeSign() {
    setValue((prevValue) => String(-1 * Number(makeCorrectRealNumber(prevValue))));
  }

  function handleClearValue() {
    calculator.clearValue();
    setValue('');
  }

  function handleDeleteSymbol() {
    setValue((prevValue) => prevValue.slice(0, -1));
  }

  function handleShowHistory() {
    setIsHistoryOpen((prevIsHistoryOpen) => !prevIsHistoryOpen);
  }

  function handleClearHistory() {
    dispatch(clearHistoryAction());
  }

  return (
    <FlexFC justify="center">
      <FlexFC direction="column">
        <DisplayFC currentValue={value} expression={expression} error={error} />
        <KeypadFC
          onEnter={handleEnterSymbol}
          onExecuteCommand={handleExecuteCommand}
          onChangeSign={handleChangeSign}
          onClearValue={handleClearValue}
          onClearExpression={handleClearExpression}
          onDelete={handleDeleteSymbol}
        />
      </FlexFC>
      <FlexFC direction="column" justify="end">
        {isHistoryOpen && <HistoryFC />}
        <ControlPanelFC
          isHistoryOpen={isHistoryOpen}
          showHistory={handleShowHistory}
          clearHistory={handleClearHistory}
          clearExpression={handleClearExpression}
        />
      </FlexFC>
    </FlexFC>
  );
}
