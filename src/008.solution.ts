import * as fs from "fs";

const GetInputData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/008.input.txt");
  return Buffer.toString();
};

const GetTestData = async () => {
  const Buffer = await fs.readFileSync(__dirname + "/008.test.input.txt");
  return Buffer.toString();
};

const digitSegments = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6,
};

export const filter = (input: { size: number; digit: string }): boolean => {
  let ret = false;
  if (input.size === 2) ret = true;
  if (input.size === 4) ret = true;
  if (input.size === 3) ret = true;
  if (input.size === 7) ret = true;
  return ret;
};

export const Solve8x1 = async () => {
  const input = await GetInputData();
  const lines = input.trim().split("\n");

  const outputValues = lines.map((x) => x.split(" | ")[1]);

  const formatted = outputValues.map((line) => {
    return line.split(" ").map((digit) => {
      const size = new Set(Array.from(digit.split(""))).size;
      return {
        size,
        digit,
        filter: filter({ size, digit }),
      };
    });
  });

  const x = formatted.flat().flat().filter(filter).length;

  console.log(`Day 8 Part 1 - ${x}`);
};

const doTheyContainTheSameSegment = (a: string, b: string) => {
  return true;
};

const digitBContainsAtLeastOneSegmentFromA = (
  a: string,
  b: string
): boolean => {
  return b.split("").filter((x) => a.split("").includes(x)).length > 1;
};

const getLikelyNumber = (size: number, answers: {}, digit: string) => {
  switch (size) {
    case 6:
      // console.log("answers", answers);
      const clues = Object.values(answers)
        .filter((x) => x === "0|6|9")
        .map((x, i) => ({ key: Object.keys(answers)[i], value: x }));
      // console.log("clues", clues);
      if (clues.length > 1) {
      }
      return "0|6|9";
    case 2:
      return 1;
    case 5:
      return "2|3|5";
    case 4:
      return 4;
    case 3:
      return 7;
    case 7:
      return 8;
    default:
      return "unknown";
  }
};

// export const Solve8x2 = async () => {
//   const input = await GetTestData();
//   const lines = input.trim().split("\n");

//   const outputValues = lines.map((x) => x.split(" | "));

//   const formatted = outputValues.map((line) => {
//     let answers: Record<string, number> = {};
//     return line[0].split(" ").map((digit) => {
//       const size = new Set(Array.from(digit.split(""))).size;
//       const guess: string | number = getLikelyNumber(size, answers, digit);
//       Object.assign(answers, {
//         [digit]: guess,
//       });
//       console.log("digit", digit);
//       // console.log(
//       //   "answers",
//       //   Object.entries(answers)
//       //     .map(([key, value]) => ({ key, value }))
//       //     .filter((x) =>
//       //       x.value
//       //         .toString()
//       //         .split("")
//       //         .map((x) => )
//       //     )
//       // );
//       return {
//         digit,
//         guess,
//       };
//     });
//   });

//   console.log(`Day 8 Part 2 - `);
// };

type Segment = "a" | "b" | "c" | "d" | "e" | "f" | "g";

type Map = Record<Segment, Segment>;

const workOutDigits = (map: string) => {
  let mapArray = new Array(10).fill(0);
  const digits = map.split(" ").sort((a, b) => a.length - b.length);
  digits.forEach((d) => {
    if (d.length === 2) {
      mapArray[0] = d;
    }
    if (d.length === 3) {
      mapArray[2] = d;
    }
    if (d.length === 4) {
      mapArray[3] = d;
    }
    if (d.length === 7) {
      mapArray[7] = d;
    }
  });
  const remainingDigits = digits.filter((x) => !mapArray.includes(x));

  const twosEtc = digits.filter((x) => x.length === 5);
  const zerosEtc = digits.filter((x) => x.length === 6);

  console.log(mapArray);
  console.log(remainingDigits);
  console.log(twosEtc.filter((x) => x)); // need to work out which is unique/has a segment from number 8 mapping
  console.log(zerosEtc);
};

export const Solve8x2 = async () => {
  const input = await GetTestData();
  const lines = input.trim().split("\n");

  // const splits = lines.slice(0).map((line) => {
  //   const [map, code] = line.split(" | ");
  //   console.log("map", map);
  //   console.log("code", code);

  //   return { map, code };
  // });
  // console.log(splits[0]);

  const [map, code] = lines[0].split(" | ");

  console.log("map", map);
  console.log("code", code);

  workOutDigits(map);
};
