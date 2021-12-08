import * as fs from "fs";

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

const getLikelyNumber = (size: number, answers: {}, digit: string) => {
  switch (size) {
    case 6:
      // console.log(
      //   "0|6|9",
      //   digit,
      //   JSON.stringify(
      //     Object.entries(answers).filter((x) => "0|6|9"),
      //     null,
      //     2
      //   )
      // );
      const contenders = Object.entries(answers).filter(
        ([key, value]) => key === "0|6|9"
      );
      console.log(contenders);
      return "0|6|9";
    case 2:
      return 1;
    case 5:
      // console.log("2|3|5", digit, answers);
      const contenders2 = Object.entries(answers).filter(
        ([key, value]) => key === "2|3|5"
      );
      console.log(contenders2);
      return "2|3|5";
    case 4:
      return 4;
    case 3:
      return 7;
    case 7:
      return 8;
    default:
      return "unknown";
  }
};

export const Solve8x2 = async () => {
  const input = await GetTestData();
  const lines = input.trim().split("\n");

  const outputValues = lines.map((x) => x.split(" | "));
  console.log(outputValues);

  const formatted = outputValues.map((line) => {
    let answers = {};
    return line[0].split(" ").map((digit) => {
      const size = new Set(Array.from(digit.split(""))).size;
      const guess: string | number = getLikelyNumber(size, answers, digit);
      Object.assign(answers, {
        [guess]: digit,
        [digit]: guess,
      });
      return {
        digit,
        guess,
      };
    });
  });

  // console.log(formatted);

  console.log(`Day 8 Part 2 - `);
};
