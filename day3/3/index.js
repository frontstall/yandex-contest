// @ts-check

const fs = require('fs');

const solution = (str) => {
  const numbers = str.trim().split(' ');
  const viewed = new Set();
  const result = [];

  while (numbers.length > 0) {
    const current = numbers.pop();
    if (!viewed.has(current)) {
      if (!numbers.includes(current)) {
        result.push(current);
      }

      viewed.add(current);
    }
  }

  return result.reverse().join(' ');
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
