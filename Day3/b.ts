import * as fs from "fs";

const readInput: string[] = fs.readFileSync("input.txt", "utf-8").split("\n");
const grouped: string[][] = sliceIntoChunks(readInput, 3);

const priorityNumbers = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

type ObjectKeypriorityNumbers = keyof typeof priorityNumbers;

const badges: string[] = grouped.map((groupes) => findCommon(groupes));

const priority: number[] = badges.map((elem) => {
  let key = elem as ObjectKeypriorityNumbers;
  return priorityNumbers[key];
});

const result: number = priority.reduce((sum, currValue) => (sum += currValue));

console.log(result);

function sliceIntoChunks(arr: string[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

function findCommon(arr: string[]) {
  let [firstPart, secondPart, third]: string[] = arr;
  let mostCommonChars: string[] = [];
  let mostCommon: string = "";

  for (let i: number = 0; i < firstPart.length; i++) {
    if (mostCommonChars.indexOf(firstPart[i]) === -1) {
      if (secondPart.indexOf(firstPart[i]) !== -1) {
        mostCommonChars.push(firstPart[i]);
      }
    }
  }

  for (let i: number = 0; i < mostCommonChars.length; i++) {
    for (let j: number = 0; j < third.length; j++) {
      if (mostCommonChars[i] === third.charAt(j)) {
        mostCommon = mostCommonChars[i];
      }
    }
  }

  return mostCommon;
}
