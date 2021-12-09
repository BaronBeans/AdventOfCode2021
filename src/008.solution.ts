import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/008.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/008.test.input.txt");
  return Buffer.toString();
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

const containsAll = (a: string, b: string) => {
  let ret = true;
  const check = a.split("");
  b.split("").forEach((d) => {
    if (!check.includes(d)) ret = false;
  });
  return ret;
};

const alphabetize = (input: string) => {
  return input
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
};

const decodeDigits = (digits: string[]) => {
  digits.sort((a, b) => a.length - b.length);

  // ! EASY NUMBERS
  // 1
  let one = digits.filter((d) => d.length === 2)[0];
  digits = digits.filter((d) => d !== one);
  // 4
  let four = digits.filter((d) => d.length === 4)[0];
  digits = digits.filter((d) => d !== four);
  // 7
  let seven = digits.filter((d) => d.length === 3)[0];
  digits = digits.filter((d) => d !== seven);
  // 8
  let eight = digits.filter((d) => d.length === 7)[0];
  digits = digits.filter((d) => d !== eight);

  // ! HARDER NUMBERS
  // 3
  let three = digits
    .filter((d) => d.length === 5)
    .filter((x) => containsAll(x, one))[0];
  digits = digits.filter((d) => d !== three);
  // 9
  let nine = digits
    .filter((d) => d.length === 6)
    .filter((x) => containsAll(x, four))[0];
  digits = digits.filter((d) => d !== nine);
  // 0
  let zero = digits
    .filter((d) => d.length === 6)
    .filter((x) => containsAll(x, one))[0];
  digits = digits.filter((d) => d !== zero);
  // 5
  let five = digits
    .filter((d) => d.length === 5)
    .filter((x) => containsAll(nine, x))[0];
  digits = digits.filter((d) => d !== five);
  // 2
  let two = digits.filter((d) => d.length === 5)[0];
  // 6
  let six = digits.filter((d) => d.length === 6)[0];

  return {
    1: alphabetize(one),
    2: alphabetize(two),
    3: alphabetize(three),
    4: alphabetize(four),
    5: alphabetize(five),
    6: alphabetize(six),
    7: alphabetize(seven),
    8: alphabetize(eight),
    9: alphabetize(nine),
    0: alphabetize(zero),
  };
};

export const Solve8x2 = async () => {
  const input = await GetInputData();
  const lines = input.trim().split("\n");

  const codes = lines.map((line) => {
    const [clue, code] = line.split(" | ");

    const encoder = Object.values(decodeDigits(clue.split(" ")));

    return code
      .split(" ")
      .map((c) => encoder.indexOf(alphabetize(c)))
      .join("");
  });

  const total = codes.reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);

  console.log(`Day 8 Part 2 - ${total}`);
};
