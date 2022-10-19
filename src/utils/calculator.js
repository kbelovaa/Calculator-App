import { roundValue, makeCorrectRealNumber } from './transformationFunctions';

class CalculatorCore {
  constructor() {
    this.value = '';
    this.expression = '';
    this.commands = [];
  }

  executeCommand(command) {
    if (this.commands.length === 0) {
      this.value = command.value;
    } else {
      this.value = roundValue(String(this.commands[this.commands.length - 1].execute(command.value)));
    }
    this.expression = this.value + command.print();
    this.commands.push(command);
  }

  calculate(value) {
    this.expression = `${this.expression}${makeCorrectRealNumber(value)}=`;
    this.value = roundValue(String(this.commands[this.commands.length - 1].execute(value)));
    this.commands = [];
  }

  clearValue() {
    this.value = '';
  }

  clearInput() {
    this.value = '';
    this.expression = '';
    this.commands = [];
  }
}

class AddCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(this.value) + Number(currentValue);
  }

  print() {
    return '+';
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(this.value) - Number(currentValue);
  }

  print() {
    return '-';
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(currentValue) * Number(this.value);
  }

  print() {
    return '*';
  }
}

class DivideCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(this.value) / Number(currentValue);
  }

  print() {
    return '/';
  }
}

class CalculateRemainderCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(this.value) % Number(currentValue);
  }

  print() {
    return '%';
  }
}

export { CalculatorCore, AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, CalculateRemainderCommand };
