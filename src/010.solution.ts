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
  const input = await GetInputData();
  const lines = input.trim().split("\n");
  let answer = 0;

  lines.forEach((line) => {
    let queue: any[] = [];
    let foundError = false;
    line.split("").forEach((char) => {
      if (foundError) return;

      switch (char) {
        case "(":
        case "[":
        case "{":
        case "<":
          queue.push(char);
          break;

        case ")":
          if (queue[queue.length - 1] === "(") {
            queue.pop();
            break;
          }
          answer += 3;
          foundError = true;

          break;
        case "]":
          if (queue[queue.length - 1] === "[") {
            queue.pop();
            break;
          }
          answer += 57;
          foundError = true;

          break;
        case "}":
          if (queue[queue.length - 1] === "{") {
            queue.pop();
            break;
          }
          answer += 1197;
          foundError = true;

          break;
        case ">":
          if (queue[queue.length - 1] === "<") {
            queue.pop();
            break;
          }
          answer += 25137;
          foundError = true;

          break;
        default:
          break;
      }
    });
  });

  console.log(`Day 10 Part 1 - ${answer}`);
};

export const Solve10x2 = async () => {
  const input = await GetInputData();
  const lines = input.trim().split("\n");
  let answer = 0;

  const newLines = lines.map((line) => {
    let queue: any[] = [];
    let foundError = false;
    line.split("").forEach((char) => {
      if (foundError) return true;

      switch (char) {
        case "(":
        case "[":
        case "{":
        case "<":
          queue.push(char);
          break;

        case ")":
          if (queue[queue.length - 1] === "(") {
            queue.pop();
            break;
          }
          answer += 3;
          foundError = true;

          break;
        case "]":
          if (queue[queue.length - 1] === "[") {
            queue.pop();
            break;
          }
          answer += 57;
          foundError = true;

          break;
        case "}":
          if (queue[queue.length - 1] === "{") {
            queue.pop();
            break;
          }
          answer += 1197;
          foundError = true;

          break;
        case ">":
          if (queue[queue.length - 1] === "<") {
            queue.pop();
            break;
          }
          answer += 25137;
          foundError = true;

          break;
        default:
          break;
      }
    });
    return foundError ? "Corrupt" : "Incomplete";
  });

  const incompleteLines: any[] = [];
  newLines.forEach((line, lineIndex) => {
    if (line === "Incomplete") {
      incompleteLines.push(lines[lineIndex]);
    }
  });

  const scores = incompleteLines.map((line) => {
    const open = ["(", "[", "{", "<"];
    const close = [")", "]", "}", ">"];
    const queue: any[] = [];
    line.split("").forEach((char: string) => {
      if (open.includes(char)) {
        queue.push(char);
      }
      if (close.includes(char)) {
        if (queue[queue.length - 1] === open[close.indexOf(char)]) {
          queue.pop();
        }
      }
    });

    return queue
      .map((x) => close[open.indexOf(x)])
      .reverse()
      .reduce((acc: number, cur: string) => {
        let newAcc = acc * 5;
        switch (cur) {
          case ")":
            return (newAcc += 1);
          case "]":
            return (newAcc += 2);
          case "}":
            return (newAcc += 3);
          case ">":
            return (newAcc += 4);
          default:
            return acc;
        }
      }, 0);
  });

  const part2answer = scores.sort((a, b) => a - b)[
    Math.floor(scores.length / 2)
  ];

  console.log(`Day 10 Part 2 - ${part2answer}`);
};
