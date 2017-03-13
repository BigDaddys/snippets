const sumDigits = (numberString) => {
  let sum = 0;
  for (let i = 0; i < numberString.length; i++) {
    sum += Number(numberString[i]);
  }
  return sum;
};

const isHappyNumber = (number) => {
  const numberString = String(number);
  const leftPart = numberString.substr(0, 3);
  const rightPart = numberString.substr(3);
  return sumDigits(leftPart) === sumDigits(rightPart);
};

export default isHappyNumber;