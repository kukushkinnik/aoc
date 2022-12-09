import * as fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n\n");
const inputStacks = input[0].split("\n");
const stacks = [];

for (let stackLine of inputStacks) {
  for (let i = 0; i < stackLine.length; i+= 4) {
    let start = i;
    let end = start + 3;
    let crate = stackLine.substring(start,end);

    let stackIndex = i / (3 + 1);
    if (!stacks[stackIndex]) {
      stacks[stackIndex] = [];
    }
    if (crate.trim()) {
      stacks[stackIndex].push(crate.substring(1, 2));
    }
  }
}

console.log(stacks)
