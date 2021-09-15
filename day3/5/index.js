// @ts-check

const fs = require('fs');

const solution = (dirtyStr) => {
  const [dirsCount, dirsStr] = dirtyStr.trim().split('\n');
  const dirs = dirsStr.split(' ').map(Number);

  let maxDirIdx = 0;
  let maxDir = dirs[0];

  for (let i = 1; i < Number(dirsCount); i += 1) {
    const currentDir = dirs[i];
    if (currentDir > maxDir) {
      maxDir = currentDir;
      maxDirIdx = i;
    }
  }

  const result = dirs.reduce((acc, dir, idx) => (idx === maxDirIdx ? acc : acc + dir), 0);

  return result;
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
