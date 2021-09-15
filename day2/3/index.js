// @ts-check

const fs = require('fs');

const solution = (dirtyStr) => {
  const str = dirtyStr.trim();
  const halfLength = Math.trunc(str.length / 2);
  const first = str.slice(0, halfLength);
  const second = str.slice(-halfLength);
  let count = 0;
  for (let i = 0, j = second.length - 1; i < first.length; i += 1, j -= 1) {
    if (first[i] !== second[j]) {
      count += 1;
    }
  }

  return count;
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
