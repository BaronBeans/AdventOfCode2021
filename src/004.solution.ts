import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/004.test.input.txt");
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

const getRowFromBoard = (board: number[][], rowIndex: number): number[] => {
  return board[rowIndex];
};

const getColumnFromBoard = (board: number[][], colIndex: number): number[] => {
  return board.map((x) => x[colIndex]);
};

const getColumnsFromBoard = (board: number[][]): number[][] => {
  return board[0].map((x, i) => {
    return board.map((x) => x[i]);
  });
};

const checkBoard = (board: number[][]) => {
  const rows = board.filter((x) => x === new Array(5).fill(-1));
  const columns = getColumnsFromBoard(board).filter(
    (x) => x === new Array(5).fill(-1)
  );

  console.log(rows.length || columns.length);
};

export const Solve4x1 = async () => {
  const input = await GetInputData();
  const splitInput = input.trim().split("\n");
  const calls = getCalls(splitInput);
  console.log(calls);
  const boards = getBoards(splitInput);
  console.log(boards);

  calls.forEach((call) => {
    boards.forEach((board, boardIndex) => {});
  });
};
