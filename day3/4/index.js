// @ts-check

const fs = require('fs');

const intersect = (set1, set2) => {
  set2.forEach((element) => {
    if (!set1.has(element)) {
      set2.delete(element);
    }
  });

  return set2;
};

const substruct = (set1, set2) => {
  set2.forEach((element) => {
    set1.delete(element);
  });

  return set1;
};

const solution = (str) => {
  const [max, ...rest] = str.trim().split('\n');
  let result = new Set(new Array(Number(max)).fill(1).map((item, i) => item + i));

  const config = {
    YES: intersect,
    NO: substruct,
  };

  for (let i = 0; i < rest.length - 1; i += 2) {
    const nums = new Set(rest[i].split(' ').map(Number));
    const answer = rest[i + 1];
    const action = config[answer];
    result = action(result, nums);
  }

  return [...result].sort((a, b) => a - b).join(' ');
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
