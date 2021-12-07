import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/004.input.txt");
  return Buffer.toString();
};

const getCalls = (input: string[]): number[] => {
  return (
    input
      .shift()
      ?.split(",")
      .map((x) => parseInt(x)) || []
  );
};

const getBoards = (input: string[]): number[][][] => {
  return input
    .join(",")
    .trim()
    .slice(1)
    .split(",,")
    .map((x) =>
      x.split(",").map((x) =>
        x
          .split(" ")
          .filter((x) => x != "")
          .map((x) => parseInt(x))
      )
    );
};

const boardHasWinner = (board: number[][]): boolean => {
  let winner = false;
  // check rows:
  board.forEach((row) => {
    if (row.filter((x) => x === -1).length === row.length) {
      winner = true;
    }
  });

  // check columns:
  board[0].forEach((col, colIndex) => {
    const columnItems = board.map((row) => row[colIndex]);
    if (columnItems.filter((x) => x === -1).length === board.length)
      winner = true;
  });

  return winner;
};

const getBoardScore = (board: number[][], call: number): number => {
  const totalLeft = board
    .flat()
    .filter((x) => x > -1)
    .reduce((acc, cur) => acc + cur, 0);

  return totalLeft * call;
};

const playOutGame = (calls: number[], boards: number[][][]) => {
  const wonBoards: { score: number; boardIndex: number }[] = [];

  calls.forEach((call) => {
    boards.forEach((board, boardIndex) => {
      board.forEach((row) => {
        row.map((value, colIndex) => {
          if (value === call) {
            row[colIndex] = -1;
          }
        });
      });
      // CHECK IF BOARD HAS WON:
      if (
        boardHasWinner(board) &&
        wonBoards.filter((x) => x.boardIndex === boardIndex).length === 0
      ) {
        const score = getBoardScore(board, call);
        wonBoards.push({ score, boardIndex });

        if (wonBoards.length === boards.length) return;
      }
    });
  });

  return wonBoards;
};

export const Solve4x1 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split("\n");
  const calls = getCalls(splitInput);
  const boards = getBoards(splitInput);

  const result = playOutGame(calls, boards);

  console.log(`Day 4 Part 1 = ${result[0].score}`);
};

export const Solve4x2 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split("\n");
  const calls = getCalls(splitInput);
  const boards = getBoards(splitInput);

  const result = playOutGame(calls, boards);

  console.log(`Day 4 Part 2 = ${result[result.length - 1].score}`);
};
