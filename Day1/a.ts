import * as fs from "fs";

const input: string = fs.readFileSync("input.txt", "utf-8");

const inputToArray: string[] = input.split(/\n\s*\n/);

let totalOfCalories: number[] = inputToArray.map((data) => {
  let amountOfCaloriesForOne: string[] = data.split("\n");
  let textToNumber: number[] = amountOfCaloriesForOne.map((el) => Number(el));
  return textToNumber.reduce(
    (sum: number, curVal: number) => (sum += curVal),
    0
  );
});

const maxCalories: number = Math.max(...totalOfCalories);
