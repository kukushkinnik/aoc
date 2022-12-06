import * as fs from "fs";

const readInput: string[] = fs.readFileSync("input.txt", "utf-8").split("\n");
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

const rucksack: string[][] = readInput.map((elem) => {
  const firstCompartment = elem.slice(0, elem.length / 2);
  const secondCompartment = elem.slice(elem.length / 2);
  const compartments: string[] = [firstCompartment, secondCompartment];

  return compartments;
});

let items = rucksack.map((elem) => findCommon(elem));
type ObjectKeyAlph = keyof typeof priorityNumbers;

const priority: number[] = items.map((elem) => {
  let key = elem as ObjectKeyAlph;
  return priorityNumbers[key];
});

const result = priority.reduce((sum, currValue) => (sum += currValue));

function findCommon(arr: string[]) {
  let firstPart = arr[0];
  let secondPart = arr[1];
  let appersInBoth;
  for (let i = 0; i < firstPart.length; i++) {
    for (let j = 0; j < firstPart.length; j++) {
      if (firstPart[i] === secondPart[j]) {
        appersInBoth = firstPart[i];
      }
    }
  }
  return appersInBoth;
}
