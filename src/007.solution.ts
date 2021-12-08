import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/007.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/007.test.input.txt");
  return Buffer.toString();
};

export const Solve7x1 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split(",");

  const poitions = splitInput.map(Number);
  const totals = [];

  for (let i = Math.min(...poitions); i <= Math.max(...poitions); i++) {
    const movements = poitions.map((p) => Math.abs(p - i));
    const total = movements.reduce((acc, cur) => acc + cur, 0);
    totals.push(total);
  }

  const answer = Math.min(...totals);
  console.log(`Day 7 Part 1 - ${answer}`);
};

const getNthTriangleNumber = (i: number): number => {
  if (i === 0) {
    return 0;
  }
  return i + getNthTriangleNumber(i - 1);
};

export const Solve7x2 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split(",");

  const poitions = splitInput.map(Number);
  const totals = [];

  for (let i = Math.min(...poitions); i <= Math.max(...poitions); i++) {
    const movements = poitions.map((p) => Math.abs(p - i));
    const total = movements.reduce(
      (acc, cur) => acc + getNthTriangleNumber(cur),
      0
    );
    totals.push(total);
  }

  const answer = Math.min(...totals);

  console.log(`Day 7 Part 2 - ${answer}`);
};
