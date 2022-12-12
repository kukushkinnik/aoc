import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n\n");
const inputStacks = input[0].split("\n");
const movesInput = input[1].trim().split("\n");
const stacks = [];

//deleting stacks numbers
inputStacks.pop();

for (let stackLine of inputStacks) {
  for (let i = 0; i < stackLine.length; i += 4) {
    let start = i;
    let end = start + 3;
    let crate = stackLine.substring(start, end);
    let stackIndex = i / (3 + 1);

    if (!stacks[stackIndex]) {
      stacks[stackIndex] = [];
    }

    if (crate.trim()) {
      stacks[stackIndex].push(crate.substring(1, 2));
    }
  }
}

const moves = movesInput
    .map(elem => elem.match(/\d{1,2}/g))
    .map(elem => elem.map(el => parseInt(el)));


const partOneResult = () => {
  for (let move of moves) {
    let [amount, from, to] = move;
    for (let i = 0; i < amount; i++) {
      if (stacks[from - 1] !== undefined) {
        let crate = stacks[from - 1].shift();
        stacks[to - 1].unshift(crate);
      }
    }
  }

  return stacks.map(stack => stack[0]).join("");
}

const partTwoResult = () => {
  for (let move of moves) {
    let [amount, from, to] = move;
    if (stacks[from - 1] !== undefined) {
      let crateStack = stacks[from - 1].splice(0, amount);
      stacks[to - 1].unshift(...crateStack)
    }
  }

  return stacks.map(stack => stack[0]).join("");
}

console.log(partOneResult())
console.log(partTwoResult());


