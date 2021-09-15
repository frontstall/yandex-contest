// @ts-check

const fs = require('fs');

const solution = (str) => {
  const [seqAsStr] = str.split('\n0');
  const seq = seqAsStr.split('\n').map(Number);
  const max = Math.max(...seq);

  return seq.filter((int) => int === max).length;
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
