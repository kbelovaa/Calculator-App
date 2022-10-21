import React, { Component } from 'react';
import Flex from 'Components/Flex';
import Display from 'Components/Display';
import KeyPad from 'Components/Keypad';
import ControlPanel from 'Components/ControlPanel';
import History from 'Components/History';
import {
  CalculatorCore,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  CalculateRemainderCommand,
} from 'Utils/calculator';
import Context from 'Utils/context';

const calculator = new CalculatorCore();

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      expression: '',
      commands: [],
      isHistoryOpen: true,
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.handleEnterSymbol = this.handleEnterSymbol.bind(this);
    this.handleExecuteCommand = this.handleExecuteCommand.bind(this);
    this.handleChangeSign = this.handleChangeSign.bind(this);
    this.handleClearValue = this.handleClearValue.bind(this);
    this.handleClearExpression = this.handleClearExpression.bind(this);
    this.handleDeleteSymbol = this.handleDeleteSymbol.bind(this);
    this.handleShowHistory = this.handleShowHistory.bind(this);
    this.handleClearHistory = this.handleClearHistory.bind(this);
  }

  updateInfo(command) {
    if (command === '=') {
      this.setState(
        (prevState) => ({
          value: calculator.value,
          expression: `${prevState.expression}${prevState.value}=`,
          commands: [],
        }),
        () => {
          this.context.onAddExpression(this.state.expression.slice(0, -1));
          calculator.clearValue();
        }
      );
    } else {
      if (this.state.commands.length > 0) {
        this.context.onAddExpression(this.state.expression + this.state.value);
      }
      this.setState({ value: '', expression: calculator.value + command });
    }
  }

  handleEnterSymbol(value) {
    this.setState((prevState) => ({
      value: prevState.value + value,
    }));
  }

  handleExecuteCommand(command) {
    if (this.state.commands.length === 0) {
      calculator.executeCommand(new AddCommand(this.state.value));
    }
    if (this.state.commands.length > 0) {
      switch (this.state.commands[this.state.commands.length - 1]) {
        case '+':
          calculator.executeCommand(new AddCommand(this.state.value));
          break;
        case '-':
          calculator.executeCommand(new SubtractCommand(this.state.value));
          break;
        case '*':
          calculator.executeCommand(new MultiplyCommand(this.state.value));
          break;
        case '/':
          calculator.executeCommand(new DivideCommand(this.state.value));
          break;
        case '%':
          calculator.executeCommand(new CalculateRemainderCommand(this.state.value));
          break;
        default:
          break;
      }
    }
    this.setState((prevState) => ({
      commands: [...prevState.commands, command],
    }));
    this.updateInfo(command);
  }

  handleChangeSign() {
    this.setState((prevState) => ({
      value: String(-1 * Number(prevState.value)),
    }));
  }

  handleClearValue() {
    calculator.clearValue();
    this.setState({ value: '' });
  }

  handleClearExpression() {
    calculator.clearValue();
    this.setState({ value: '', expression: '' });
  }

  handleDeleteSymbol() {
    this.setState((prevState) => ({
      value: prevState.value.slice(0, -1),
    }));
  }

  handleShowHistory() {
    this.setState((prevState) => ({
      isHistoryOpen: !prevState.isHistoryOpen,
    }));
  }

  handleClearHistory() {
    this.context.onClearExpressions();
  }

  static contextType = Context;

  render() {
    return (
      <Flex justify="center">
        <Flex direction="column">
          <Display currentValue={this.state.value} expression={this.state.expression} />
          <KeyPad
            onEnter={this.handleEnterSymbol}
            onExecuteCommand={this.handleExecuteCommand}
            onChangeSign={this.handleChangeSign}
            onClearValue={this.handleClearValue}
            onClearExpression={this.handleClearExpression}
            onDelete={this.handleDeleteSymbol}
          />
        </Flex>
        <Flex direction="column" justify="end">
          {this.state.isHistoryOpen && <History history={this.context.onShowHistory} />}
          <ControlPanel
            isHistoryOpen={this.state.isHistoryOpen}
            showHistory={this.handleShowHistory}
            clearHistory={this.handleClearHistory}
            clearExpression={this.handleClearExpression}
          />
        </Flex>
      </Flex>
    );
  }
}
