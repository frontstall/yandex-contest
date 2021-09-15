// @ts-check

const fs = require('fs');

const has = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

const solution = (str) => {
  const numbers = str.trim().split(' ');
  const result = numbers.reduce((acc, num) => {
    const count = has(acc, num) ? acc[num] + 1 : 1;
    acc[num] = count;
    return acc;
  }, {});

  return Object.keys(result).filter((num) => (result[num] === 1)).join(' ');
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
