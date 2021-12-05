import input from "./001.input";

// How many measurements are larger than the previous measurement?

const Solve1x1 = () => {
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
  console.log(total);
};

Solve1x1();
