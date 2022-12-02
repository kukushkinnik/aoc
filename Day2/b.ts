import * as fs from "fs";

const readInput: string[] = fs.readFileSync("input.txt", "utf-8").split("\n");

const elf = {
  A: "Rock",
  B: "Paper",
  C: "Scissors",
};

const user = {
  X: "lost",
  Y: "draw",
  Z: "win",
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

console.log(userChoices);

let results: number[] = [];

for (let i = 0; i < elfChoices.length; i++) {
  if (elfChoices[i] === "Rock" && userChoices[i] === "draw") {
    results.push(pointsForCondition["draw"] + pointsForShape["Rock"]);
  }
  if (elfChoices[i] === "Rock" && userChoices[i] === "win") {
    results.push(pointsForCondition["win"] + pointsForShape["Paper"]);
  }
  if (elfChoices[i] === "Rock" && userChoices[i] === "lost") {
    results.push(pointsForCondition["lost"] + pointsForShape["Scissors"]);
  }

  if (elfChoices[i] === "Paper" && userChoices[i] === "lost") {
    results.push(pointsForCondition["lost"] + pointsForShape["Rock"]);
  }
  if (elfChoices[i] === "Paper" && userChoices[i] === "draw") {
    results.push(pointsForCondition["draw"] + pointsForShape["Paper"]);
  }
  if (elfChoices[i] === "Paper" && userChoices[i] === "win") {
    results.push(pointsForCondition["win"] + pointsForShape["Scissors"]);
  }

  if (elfChoices[i] === "Scissors" && userChoices[i] === "lost") {
    results.push(pointsForCondition["lost"] + pointsForShape["Paper"]);
  }
  if (elfChoices[i] === "Scissors" && userChoices[i] === "draw") {
    results.push(pointsForCondition["draw"] + pointsForShape["Scissors"]);
  }
  if (elfChoices[i] === "Scissors" && userChoices[i] === "win") {
    results.push(pointsForCondition["win"] + pointsForShape["Rock"]);
  }
}

const pointsTotal: number = results.reduce((sum, curVal) => (sum += curVal));
