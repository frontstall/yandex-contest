// @ts-check

const fs = require('fs');

const solution = (str) => {
  const [first, second] = str.split('\n');
  const firstSet = new Set(first.split(' '));
  const secondSet = new Set(second.split(' '));
  let counter = 0;
  secondSet.forEach((item) => {
    if (firstSet.has(item)) {
      counter += 1;
    }
  });
  return counter;
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
