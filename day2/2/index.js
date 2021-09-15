// @ts-check

const fs = require('fs');

const buildingIsHouse = (b) => b === '1';
const buildingIsShop = (b) => b === '2';

const solution = (str) => {
  const buildings = str.split(' ');
  const housesIdxs = [];
  buildings.forEach((building, idx) => {
    if (buildingIsHouse(building)) {
      housesIdxs.push(idx);
    }
  });

  const getLeftPathLength = (idx) => {
    let length = 0;
    if (idx === 0) {
      return Infinity;
    }

    for (let i = idx - 1; i >= 0; i -= 1) {
      length += 1;
      if (buildingIsShop(buildings[i])) {
        return length;
      }
    }

    return Infinity;
  };

  const getRightPathLength = (idx) => {
    let length = 0;
    if (idx === buildings[buildings.length - 1]) {
      return Infinity;
    }

    for (let i = idx + 1; i < buildings.length; i += 1) {
      length += 1;
      if (buildingIsShop(buildings[i])) {
        return length;
      }
    }

    return Infinity;
  };

  let longestPath = 0;

  housesIdxs.forEach((idx) => {
    const shortestPath = Math.min(getLeftPathLength(idx), getRightPathLength(idx));
    if (shortestPath > longestPath) {
      longestPath = shortestPath;
    }
  });

  return longestPath;
};

const fileContent = fs.readFileSync('input.txt', 'utf8');
const result = solution(fileContent);
fs.writeFileSync('output.txt', result.toString());
