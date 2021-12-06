import input from "./003.input";

// What is the power consumption of the submarine?

const Solve3x1 = () => {
  const gamma = [];
  const epsilon = [];
  for (let i = 0; i < 11; i++) {
    const result = input.split("\n").reduce(
      (prev, cur, ind, arr) => {
        if (cur.split("")[i] === "1") {
          return {
            ...prev,
            ones: prev.ones + 1,
          };
        }
        return {
          ...prev,
          zeroes: prev.zeroes + 1,
        };
      },
      { zeroes: 0, ones: 0 }
    );
    gamma.push(result.ones > result.zeroes ? 1 : 0);
    epsilon.push(result.ones > result.zeroes ? 0 : 1);
  }
  console.log(gamma.join(""));
  //   11110010001
  const gammaInt = parseInt(gamma.join(""), 2);

  console.log(epsilon.join(""));
  //   00001101110
  const epsilonInt = parseInt(epsilon.join(""), 2);

  console.log(gammaInt * epsilonInt);
};

Solve3x1();
