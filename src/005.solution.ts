import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/005.test.input.txt");
  return Buffer.toString();
};

interface Line {
  from: Point;
  to: Point;
}

interface Point {
  x: number;
  y: number;
}

const getLines = (input: string[]): Line[] => {
  return input.map((i) => {
    return {
      from: {
        x: parseInt(i.split(" -> ")[0].split(",")[0]),
        y: parseInt(i.split(" -> ")[0].split(",")[1]),
      },
      to: {
        x: parseInt(i.split(" -> ")[1].split(",")[0]),
        y: parseInt(i.split(" -> ")[1].split(",")[1]),
      },
    };
  });
};

const lineIsHorizontalOrVertical = (line: Line): boolean => {
  const { from, to } = line;
  if (from.x === to.x || from.y === to.y) return true;
  return false;
};

const diff = (a: number, b: number) => {
  return a > b ? a - b : b - a;
};

const lineIsDiagonal = (line: Line): boolean => {
  const { from, to } = line;
  if (lineIsHorizontalOrVertical(line)) return true;
  if (diff(from.x, to.x) === diff(from.y, to.y)) return true;
  return false;
};

export const Solve5x1 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split("\n");
  const lines = getLines(splitInput);

  let grid: any = {};

  lines.forEach((line) => {
    for (
      let x = Math.min(line.from.x, line.to.x);
      x <= Math.max(line.from.x, line.to.x);
      x++
    ) {
      for (
        let y = Math.min(line.from.y, line.to.y);
        y <= Math.max(line.from.y, line.to.y);
        y++
      ) {
        const key = `${x},${y}`;
        if (grid[key]) {
          grid[key] += 1;
        } else {
          grid[key] = 1;
        }
      }
    }
  });

  const duplicates = Object.keys(grid).filter((x) => grid[x] > 1);

  console.log(`Day 5 Part 1 - ${duplicates.length}`);
};

export const Solve5x2 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split("\n");
  const lines = getLines(splitInput);

  let grid: any = {};

  lines.forEach((line) => {
    for (
      let x = Math.min(line.from.x, line.to.x);
      x <= Math.max(line.from.x, line.to.x);
      x++
    ) {
      for (
        let y = Math.min(line.from.y, line.to.y);
        y <= Math.max(line.from.y, line.to.y);
        y++
      ) {
        const key = `${x},${y}`;
        if (grid[key]) {
          grid[key] += 1;
        } else {
          grid[key] = 1;
        }
      }
    }
  });

  const duplicates = Object.keys(grid).filter((x) => grid[x] > 1);

  console.log(`Day 5 Part 2 - ${duplicates.length}`);
};
