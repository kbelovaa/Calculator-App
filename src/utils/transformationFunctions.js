function roundValue(value) {
  const dotIndex = value.indexOf('.');
  const afterLastDigit = value.substr(dotIndex + 4, 1);
  if (Number(afterLastDigit) >= 5) {
    const lastDigit = value.substr(dotIndex + 3, 1);
    return `${value.slice(0, dotIndex + 3)}${Number(lastDigit) + 1}`;
  }
  return value.slice(0, dotIndex + 4);
}

function makeCorrectRealNumber(value) {
  if (value.slice(0, 1) === '.') {
    return `0${value}`;
  }
  return value;
}

export { roundValue, makeCorrectRealNumber };
