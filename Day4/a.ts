import * as fs from "fs";

const input: string[][][] = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((elem) => elem.split(","))
  .map((elem) => elem.map((el) => el.split("-")));

const sectionsRanges: number[][][] = input.map((elem) =>
  elem.map((elm) => createRange(elm))
);
const isSectionCoverdByOther: boolean[] = sectionsRanges.map((elem) =>
  coversAll(elem)
);

const amountOfOverLapingSections: boolean[] = isSectionCoverdByOther.filter(
  (el) => el === true
);
console.log(amountOfOverLapingSections.length);

function createRange(ranges: string[]) {
  const [start, end] = ranges;
  const sections: number[] = [
    ...Array(parseInt(end) - parseInt(start) + 1).keys(),
  ].map((x) => x + parseInt(start));
  return sections;
}

function coversAll(sections: number[][]) {
  const [firstElf, secondElf] = sections;
  const results: boolean =
    secondElf.every((el) => firstElf.includes(el)) ||
    firstElf.every((el) => secondElf.includes(el));
  return results;
}
