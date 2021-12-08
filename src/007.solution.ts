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
  const input = await GetTestData();
  const splitInput = input.trim().split(",");
  console.log(splitInput);
  console.log(`Day 7 Part 1 - `);
};

export const Solve7x2 = async () => {
  const input = await GetTestData();
  const splitInput = input.trim().split(",");

  console.log(`Day 7 Part 2 - `);
};
