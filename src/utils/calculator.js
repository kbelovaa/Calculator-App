import { roundValue, makeCorrectRealNumber } from './transformationFunctions';

class CalculatorCore {
  constructor() {
    this.value = '';
  }

  executeCommand(command) {
    this.value = roundValue(String(command.execute(this.value)));
  }

  clearValue() {
    this.value = '';
  }
}

class AddCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(currentValue) + Number(this.value);
  }
}

class SubtractCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(currentValue) - Number(this.value);
  }
}

class MultiplyCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(this.value) * Number(currentValue);
  }
}

class DivideCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(currentValue) / Number(this.value);
  }
}

class CalculateRemainderCommand {
  constructor(value) {
    this.value = makeCorrectRealNumber(value);
  }

  execute(currentValue) {
    return Number(currentValue) % Number(this.value);
  }
}

export { CalculatorCore, AddCommand, SubtractCommand, MultiplyCommand, DivideCommand, CalculateRemainderCommand };
