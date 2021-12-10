import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/009.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/009.test.input.txt");
  return Buffer.toString();
};

type Point = {
  x: number;
  y: number;
};

const getNeighbourPositions = (x: number, y: number, data: string[][]) => {
  const neighbours: Point[] = [];
  if (y > 0) {
    neighbours.push({
      x,
      y: y - 1,
    });
  }
  if (y < data.length - 1) {
    neighbours.push({
      x,
      y: y + 1,
    });
  }
  if (x > 0) {
    neighbours.push({
      x: x - 1,
      y,
    });
  }
  if (x < data[y].length - 1) {
    neighbours.push({
      x: x + 1,
      y,
    });
  }

  return neighbours;
};

export const Solve9x1 = async () => {
  const input = await GetInputData();
  const splitInput = input
    .trim()
    .split("\n")
    .map((x) => x.split(""));
  let count = 0;
  for (let y = 0; y < splitInput.length; y++) {
    for (let x = 0; x < splitInput[y].length; x++) {
      let neighbours = getNeighbourPositions(x, y, splitInput);
      if (neighbours.every((n) => splitInput[n.y][n.x] > splitInput[y][x])) {
        count += +splitInput[y][x] + 1;
      }
    }
  }
  console.log(`Day 9 Part 1 - ${count}`);
};

const getBasinNeighbours = (
  x: number,
  y: number,
  data: string[][],
  basin: Point[]
): Point[] => {
  let neighbours = getNeighbourPositions(x, y, data);

  neighbours.forEach((n) => {
    if (+data[n.y][n.x] === 9) {
      return;
    }
    if (basin.filter((b) => b.x === n.x && b.y === n.y).length) {
      return;
    }
    basin.push({ x: n.x, y: n.y });
    basin = getBasinNeighbours(n.x, n.y, data, basin);
  });

  return basin;
};

export const Solve9x2 = async () => {
  const input = await GetInputData();
  const splitInput = input
    .trim()
    .split("\n")
    .map((x) => x.split(""));
  const basinSizes = [];
  for (let y = 0; y < splitInput.length; y++) {
    for (let x = 0; x < splitInput[y].length; x++) {
      let neighbours = getNeighbourPositions(x, y, splitInput);
      if (neighbours.every((n) => splitInput[n.y][n.x] > splitInput[y][x])) {
        let basinNeighbours = getBasinNeighbours(x, y, splitInput, []);

        basinSizes.push(basinNeighbours.length);
      }
    }
  }

  const answer = basinSizes
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cur) => acc * cur, 1);
  console.log(`Day 9 Part 2 - ${answer}`);
};
