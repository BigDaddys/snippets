export const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = numAsStr.length - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i--;
  }
  const reversedModule = Number(reversedStr);

  return num > 0 ? reversedModule : -reversedModule;
};