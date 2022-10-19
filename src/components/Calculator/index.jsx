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
      isHistoryOpen: true,
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.handleEnterSymbol = this.handleEnterSymbol.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubstract = this.handleSubstract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleCalculateRemainder = this.handleCalculateRemainder.bind(this);
    this.handleChangeSign = this.handleChangeSign.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleClearValue = this.handleClearValue.bind(this);
    this.handleClearExpression = this.handleClearExpression.bind(this);
    this.handleDeleteSymbol = this.handleDeleteSymbol.bind(this);
    this.handleShowHistory = this.handleShowHistory.bind(this);
    this.handleClearHistory = this.handleClearHistory.bind(this);
  }

  updateInfo() {
    this.setState({ value: calculator.value, expression: calculator.expression });
    if (calculator.commands.length > 1) {
      this.context.onAddExpression(this.state.expression + this.state.value);
    }
  }

  handleEnterSymbol(value) {
    this.setState((prevState) => ({
      value: prevState.value + value,
    }));
  }

  handleAdd(value) {
    calculator.executeCommand(new AddCommand(value));
    this.updateInfo();
    this.setState({ value: '' });
  }

  handleSubstract(value) {
    calculator.executeCommand(new SubtractCommand(value));
    this.updateInfo();
    this.setState({ value: '' });
  }

  handleMultiply(value) {
    calculator.executeCommand(new MultiplyCommand(value));
    this.updateInfo();
    this.setState({ value: '' });
  }

  handleDivide(value) {
    calculator.executeCommand(new DivideCommand(value));
    this.updateInfo();
    this.setState({ value: '' });
  }

  handleCalculateRemainder(value) {
    calculator.executeCommand(new CalculateRemainderCommand(value));
    this.updateInfo();
    this.setState({ value: '' });
  }

  handleChangeSign() {
    this.setState((prevState) => ({
      value: String(-1 * Number(prevState.value)),
    }));
  }

  handleCalculate(value) {
    calculator.calculate(value);
    this.updateInfo();
    this.context.onAddExpression(calculator.expression.slice(0, -1));
  }

  handleClearValue() {
    calculator.clearValue();
    this.updateInfo();
  }

  handleClearExpression() {
    calculator.clearInput();
    this.updateInfo();
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
      <div>
        <Flex justify="center">
          <Flex direction="column">
            <Display currentValue={this.state.value} expression={this.state.expression} />
            <KeyPad
              currentValue={this.state.value}
              onEnter={this.handleEnterSymbol}
              onAdd={this.handleAdd}
              onSubstract={this.handleSubstract}
              onMultiply={this.handleMultiply}
              onDivide={this.handleDivide}
              onRemainder={this.handleCalculateRemainder}
              onChangeSign={this.handleChangeSign}
              onCalculate={this.handleCalculate}
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
      </div>
    );
  }
}
