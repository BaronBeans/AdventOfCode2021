import * as fs from "fs";
import { format } from "path/posix";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/008.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/008.test.input.txt");
  return Buffer.toString();
};

const digitSegments = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6,
};

export const filter = (input: { size: number; digit: string }): boolean => {
  let ret = false;
  if (input.size === 2) ret = true;
  if (input.size === 4) ret = true;
  if (input.size === 3) ret = true;
  if (input.size === 7) ret = true;
  return ret;
};

export const Solve8x1 = async () => {
  const input = await GetInputData();
  const lines = input.trim().split("\n");

  const outputValues = lines.map((x) => x.split(" | ")[1]);
  // console.log(outputValues);

  const formatted = outputValues.map((line) => {
    return line.split(" ").map((digit) => {
      const size = new Set(Array.from(digit.split(""))).size;
      return {
        size,
        digit,
        filter: filter({ size, digit }),
      };
    });
  });

  const x = formatted.flat().flat().filter(filter).length;

  console.log(`Day 8 Part 1 - ${x}`);
};

export const Solve8x2 = async () => {
  const input = await GetTestData();
  const lines = input.trim().split("\n");

  const outputValues = lines.map((x) => x.split(" | "));
  console.log(outputValues);

  // const formatted = outputValues.map((line) => {
  //   return line.split(" ").map((digit) => {
  //     const size = new Set(Array.from(digit.split(""))).size;
  //     return {
  //       size,
  //       digit,
  //       filter: filter({ size, digit }),
  //     };
  //   });
  // });

  // const x = formatted.flat().flat().filter(filter).length;

  console.log(`Day 8 Part 2 - `);
};
