import input from "./003.input";
const splitInput = input.trim().split("\n");

// What is the power consumption of the submarine?

const mostCommonInPosition = (array: number[][], index: number) => {
  const gamma = [];
  const epsilon = [];
  for (let i = 0; i < 12; i++) {
    const result = array.reduce(
      (prev, cur, ind, arr) => {
        if (cur[i] === 1) {
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
    gamma.push(result.ones >= result.zeroes ? 1 : 0);
    epsilon.push(result.ones > result.zeroes ? 0 : 1);
  }
  return gamma[index];
};

const leastCommonInPosition = (array: number[][], index: number): number => {
  const gamma = [];
  const epsilon = [];
  for (let i = 0; i < 12; i++) {
    const result = array.reduce(
      (prev, cur, ind, arr) => {
        if (cur[i] === 1) {
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
    epsilon.push(result.ones >= result.zeroes ? 0 : 1);
  }
  return epsilon[index];
};

const countZerosAndOnes = (numberArray: number[][]) => {
  const newArray = [];

  for (let i = 0; i < numberArray[0].length; i++) {
    let zeros = 0;
    let ones = 0;
    numberArray.map((l) => {
      if (l[i] === 1) {
        ones++;
      } else {
        zeros++;
      }
    });
    newArray.push({ ones, zeros });
  }

  return newArray;
};

export const Solve3x1 = () => {
  const numberArray = splitInput.map((x) =>
    x.split("").map((x) => parseInt(x))
  );

  const newArray = countZerosAndOnes(numberArray);

  const gamma = newArray.map((x) => (x.ones > x.zeros ? 1 : 0));
  const gammaInt = parseInt(gamma.join(""), 2);

  const epsilon = newArray.map((x) => (x.ones > x.zeros ? 0 : 1));
  const epsilonInt = parseInt(epsilon.join(""), 2);

  console.log(`Day 3 Part 1 - ${gammaInt * epsilonInt}`);
  // 852500
};

export const Solve3x2 = () => {
  const numberArray = splitInput.map((x) =>
    x.split("").map((x) => parseInt(x))
  );

  let oxygenRate, co2ScrubRate;

  let oxygenBits = [...numberArray];
  for (let i = 0; i < oxygenBits[0].length; i++) {
    const mostCommonBit = mostCommonInPosition(oxygenBits, i);
    let o2Contenders = oxygenBits.filter((x) => x[i] === mostCommonBit);
    oxygenBits = oxygenBits.filter((x) => o2Contenders.includes(x));
    if (oxygenBits.length === 1) break;
  }
  oxygenRate = parseInt(oxygenBits[0].join("").trim(), 2);

  let carbonBits = [...numberArray];
  for (let i = 0; i < carbonBits[0].length; i++) {
    const mostCommonBit = leastCommonInPosition(carbonBits, i);
    let co2Contenders = carbonBits.filter((x) => x[i] === mostCommonBit);
    carbonBits = carbonBits.filter((x) => co2Contenders.includes(x));
    if (carbonBits.length === 1) break;
  }
  co2ScrubRate = parseInt(carbonBits[0].join("").trim(), 2);

  console.log(`Day 3 Part 2 - ${oxygenRate * co2ScrubRate}`);
  // 1007985
};
