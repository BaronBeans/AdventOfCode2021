import input from "./002.input";

// Calculate the horizontal position and depth you would have after following the planned course. What do you get if you multiply your final horizontal position by your final depth?

const Solve2x1 = () => {
  const result = input.split("\n").reduce(
    (prev, cur, i, arr) => {
      const splt = cur.split(" ");
      switch (splt[0]) {
        case "forward":
          return {
            ...prev,
            horizontal: prev.horizontal + parseInt(splt[1]),
          };
        case "up":
          return {
            ...prev,
            depth: prev.depth - parseInt(splt[1]),
          };
        case "down":
          return {
            ...prev,
            depth: prev.depth + parseInt(splt[1]),
          };
        default:
          return prev;
      }
    },
    { horizontal: 0, depth: 0 }
  );
  console.log(result.horizontal * result.depth);
  //   1499229
};

const Solve2x2 = () => {
  const result = input.split("\n").reduce(
    (prev, cur, i, arr) => {
      const splt = cur.split(" ");
      switch (splt[0]) {
        case "forward":
          return {
            ...prev,
            horizontal: prev.horizontal + parseInt(splt[1]),
            depth: prev.depth + parseInt(splt[1]) * prev.aim,
          };
        case "up":
          return {
            ...prev,
            aim: prev.aim - parseInt(splt[1]),
          };
        case "down":
          return {
            ...prev,
            aim: prev.aim + parseInt(splt[1]),
          };
        default:
          return prev;
      }
    },
    { horizontal: 0, aim: 0, depth: 0 }
  );
  console.log(result.horizontal * result.depth);
  //   1340836560
};

Solve2x1();
Solve2x2();
