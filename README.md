# AdventOfCode2021

snippet to generate new day:

	"Template for Day xx code": {
		"scope": "javascript,typescript",
		"prefix": "day",
		"body": [
			"import * as fs from 'fs';",
			"",
			"const GetInputData = async () => {",
			"  const Buffer = await fs.readFileSync(__dirname + '/00$1.input.txt');",
			"  return Buffer.toString();",
			"};",
			"",
			"",
			"const GetTestData = async () => {",
			"  const Buffer = await fs.readFileSync(__dirname + '/00$1.test.input.txt');",
			"  return Buffer.toString();",
			"};",
			"",
			"export const Solve$1x1 = async () => {",
			"  const input = await GetTestData();",
			"  const splitInput = input.trim().split(',');",
			"$2",
			"  console.log( `Day $1 Part 1 - ` );",
			"};",
			"",
			"export const Solve$1x2 = async () => {",
			"  const input = await GetTestData();",
			"  const splitInput = input.trim().split(',');",
			"",
			"  console.log( `Day $1 Part 2 - ` );",
			"};"
		]
	}
