import input from "./001.input";

// How many measurements are larger than the previous measurement?

export const Solve1x1 = () => {
  const newArray = input.split("\n").map((e, i, a) => {
    if (i === 0) {
      return 0;
    }
    if (e > a[i - 1]) {
      return 1;
    }
    return 0;
  });
  const total = (newArray as number[]).reduce((prev, cur) => prev + cur, 0);
  console.log(`Day 1 Part 1 - ${total}`);
  // 1655
};

export const Solve1x2 = () => {
  const grouped = input.split("\n").map((e, i, a) => {
    if (i > a.length - 2) return 0;
    return parseInt(e) + parseInt(a[i + 1]) + parseInt(a[i + 2]);
  });
  const newArray = grouped.map((e, i, a) => {
    if (i === 0) {
      return 0;
    }
    if (e > a[i - 1]) {
      return 1;
    }
    return 0;
  });
  const total = (newArray as number[]).reduce((prev, cur) => prev + cur, 0);
  console.log(`Day 1 Part 2 - ${total}`);
  // 1683
};
