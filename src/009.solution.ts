import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/009.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/009.test.input.txt");
  return Buffer.toString();
};

export const Solve9x1 = async () => {
  const input = await GetInputData();
  const splitInput = input
    .trim()
    .split("\n")
    .map((x) => x.split(""));

  const getNeighbours = (x: number, y: number) => {
    const neighbours = [];
    if (y > 0) {
      neighbours.push(splitInput[y - 1][x]);
    }
    if (y < splitInput.length - 1) {
      neighbours.push(splitInput[y + 1][x]);
    }
    if (x > 0) {
      neighbours.push(splitInput[y][x - 1]);
    }
    if (x < splitInput[y].length - 1) {
      neighbours.push(splitInput[y][x + 1]);
    }

    return neighbours;
  };

  let count = 0;

  for (let y = 0; y < splitInput.length; y++) {
    for (let x = 0; x < splitInput[y].length; x++) {
      let value = parseInt(splitInput[y][x]);
      let neighbours = getNeighbours(x, y);
      if (
        neighbours.filter((n) => parseInt(n) > value).length ===
        neighbours.length
      ) {
        count += value + 1;
      }
    }
  }

  console.log(`Day 9 Part 1 - ${count}`);
};

export const Solve9x2 = async () => {
  const input = await GetTestData();
  const splitInput = input
    .trim()
    .split("\n")
    .map((x) => x.split(""));

  const getNeighbours = (x: number, y: number) => {
    const neighbours = [];
    if (y > 0) {
      neighbours.push(splitInput[y - 1][x]);
    }
    if (y < splitInput.length - 1) {
      neighbours.push(splitInput[y + 1][x]);
    }
    if (x > 0) {
      neighbours.push(splitInput[y][x - 1]);
    }
    if (x < splitInput[y].length - 1) {
      neighbours.push(splitInput[y][x + 1]);
    }

    return neighbours;
  };

  const lowPoints = [];

  for (let y = 0; y < splitInput.length; y++) {
    for (let x = 0; x < splitInput[y].length; x++) {
      let value = parseInt(splitInput[y][x]);
      let neighbours = getNeighbours(x, y);
      if (
        neighbours.filter((n) => parseInt(n) > value).length ===
        neighbours.length
      ) {
        lowPoints.push({ x, y });
      }
    }
  }

  //   Want to get the lowest points and then starting with their neighbours get their neighbours and keep going up until you get to 9's

  const values = lowPoints.map((l) => {
    let value = splitInput[l.y][l.x];
    return value;
  });

  console.log(lowPoints);
  console.log(values);

  console.log(`Day 9 Part 2 - `);
};
