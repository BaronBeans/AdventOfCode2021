import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/011.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/011.test.input.txt");
  return Buffer.toString();
};

const performStep = (state: number[][]) => {
  let flashes = 0;
  let energyIncrease = state.map((row) => {
    return row.map((column) => {
      return column + 1;
    });
  });
  return energyIncrease;
};

export const Solve11x1 = async () => {
  const input = await GetTestData();
  const splitInput = input
    .trim()
    .split("\n")
    .map((x) => x.split("").map(Number));

  console.log(splitInput[0]);
  let newData = performStep(splitInput);
  console.log(newData[0]);

  console.log(`Day 11 Part 1 - `);
};

export const Solve11x2 = async () => {
  const input = await GetTestData();
  const splitInput = input.trim().split(",");

  console.log(`Day 11 Part 2 - `);
};
