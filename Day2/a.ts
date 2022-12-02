import * as fs from "fs";

const readInput: string[] = fs.readFileSync("input.txt", "utf-8").split("\n");

const elf = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};

const user = {
  X: "Rock",
  Y: "Paper",
  Z: "Scissors",
};

const pointsForShape = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const pointsForCondition = {
  lost: 0,
  draw: 3,
  win: 6,
};

type ObjectKeyElf = keyof typeof elf;
type ObjectKeyUser = keyof typeof user;
type ObjectKeyShape = keyof typeof pointsForShape;

const elfChoices = readInput.map((elem) => {
  let key = elem[0] as ObjectKeyElf;
  return elf[key];
});

const userChoices = readInput.map((elem) => {
  let key = elem[2] as ObjectKeyUser;
  return user[key];
});

const pointsForShapeUser = userChoices.map((elem) => {
  let key = elem as ObjectKeyShape;
  return pointsForShape[key];
});

let results: number[] = [];

for (let i = 0; i < elfChoices.length; i++) {
  if (elfChoices[i] === "Rock" && userChoices[i] === "Scissors") {
    results.push(pointsForCondition["lost"]);
  }
  if (elfChoices[i] === "Rock" && userChoices[i] === "Rock") {
    results.push(pointsForCondition["draw"]);
  }
  if (elfChoices[i] === "Rock" && userChoices[i] === "Paper") {
    results.push(pointsForCondition["win"]);
  }

  if (elfChoices[i] === "Paper" && userChoices[i] === "Rock") {
    results.push(pointsForCondition["lost"]);
  }
  if (elfChoices[i] === "Paper" && userChoices[i] === "Paper") {
    results.push(pointsForCondition["draw"]);
  }
  if (elfChoices[i] === "Paper" && userChoices[i] === "Scissors") {
    results.push(pointsForCondition["win"]);
  }

  if (elfChoices[i] === "Scissors" && userChoices[i] === "Paper") {
    results.push(pointsForCondition["lost"]);
  }
  if (elfChoices[i] === "Scissors" && userChoices[i] === "Scissors") {
    results.push(pointsForCondition["draw"]);
  }
  if (elfChoices[i] === "Scissors" && userChoices[i] === "Rock") {
    results.push(pointsForCondition["win"]);
  }
}

const pointsTotal: number = results.reduce((sum, curVal) => (sum += curVal));
const shapesTotal: number = pointsForShapeUser.reduce(
  (sum, curVal) => (sum += curVal)
);

let totalScore: number = pointsTotal + shapesTotal;
