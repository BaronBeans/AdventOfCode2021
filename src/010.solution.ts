import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/010.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/010.test.input.txt");
  return Buffer.toString();
};

export const Solve10x1 = async () => {
  const input = await GetTestData();
  const lines = input.trim().split("\n");

  console.log("lines", lines);

  console.log(`Day 10 Part 1 - `);
};

export const Solve10x2 = async () => {
  const input = await GetTestData();
  const lines = input.trim().split("\n");

  console.log(`Day 10 Part 2 - `);
};
