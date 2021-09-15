// @ts-check

const fs = require('fs');

const solution = (dirtyStr) => {
  const [benchData, coordsStr] = dirtyStr.trim().split('\n');
  const [benchLen] = benchData.split(' ').map(Number);
  const coords = coordsStr.split(' ').map(Number);

  const middle = (benchLen - 1) / 2;

  while (true) {
    if (coords.length === 1) {
      break;
    }
    const nextLeft = 1;
    const nextRight = coords.length - 2;

    if (coords[nextLeft] <= middle) {
      coords.shift();
    } else if (coords[nextRight] >= middle) {
      coords.pop();
    } else {
      break;
    }
  }

  return coords.join(' ');
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
