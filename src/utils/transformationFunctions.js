function roundValue(value, numberOfDigits = 3) {
  const dotIndex = value.indexOf('.');
  const eIndex = value.indexOf('e');
  if (dotIndex !== -1 && eIndex === -1 && value.substr(dotIndex + 1).length > numberOfDigits) {
    const lastDigit = value.substr(dotIndex + numberOfDigits, 1);
    const afterLastDigit = value.substr(dotIndex + numberOfDigits + 1, 1);
    if (Number(afterLastDigit) >= 5 && Number(lastDigit) < 9) {
      return `${value.slice(0, dotIndex + numberOfDigits)}${Number(lastDigit) + 1}`;
    }
    if (Number(afterLastDigit) >= 5 && lastDigit === '9') {
      if (numberOfDigits === 1) {
        return Number(value.slice(0, dotIndex + numberOfDigits - 1)) + 1;
      }
      return roundValue(value, numberOfDigits - 1);
    }
    return value.slice(0, dotIndex + numberOfDigits + 1).replace(/.0*$/, '');
  }
  return value;
}

function makeCorrectRealNumber(value) {
  if (value.slice(0, 1) === '.') {
    return `0${value}`;
  }
  return value;
}

export { roundValue, makeCorrectRealNumber };
