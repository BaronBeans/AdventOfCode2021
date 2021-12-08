import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/006.input.txt");
  return Buffer.toString();
};

const cycleDay = (input: number[]) => {
  let inputCopy = [...input];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      inputCopy[i] = 6;
      inputCopy.push(8);
    } else {
      inputCopy[i] = input[i] - 1;
    }
  }
  return inputCopy;
};

export const Solve6x1 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split(",").map(Number);

  let latestData = [...splitInput];

  for (let d = 0; d < 80; d++) {
    latestData = cycleDay(latestData);
  }

  console.log(`Day 6 Part 1 - ${latestData.length}`);
};

const cycleDayOptimised = (input: Record<number, number>) => {
  let inputCopy = { ...input };

  for (let key in Object.entries(input)) {
    if (key === "0") {
      inputCopy["8"] = input["0"];
      input["7"] += input["0"];
    } else {
      const previous = parseInt(key) - 1;
      inputCopy[previous] = input[key];
    }
  }

  return inputCopy;
};

export const Solve6x2 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split(",").map(Number);

  let y: Record<number, number> = {};

  for (let i = 0; i < 9; i++) {
    const count = splitInput.filter((x) => x === i).length;
    Object.assign(y, { [i]: count });
  }
  for (let d = 0; d < 256; d++) {
    y = cycleDayOptimised(y);
  }

  const total = Object.values(y).reduce((acc, cur) => acc + cur, 0);

  console.log(`Day 6 Part 2 - ${total}`);
};
