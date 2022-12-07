import * as fs from "fs";

const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((elem) => elem.split(","))
  .map((elem) => elem.map((el) => el.split("-")));

const sectionsRanges = input.map((elem) => elem.map((elm) => createRange(elm)));
const isSectionCoverdByOther = sectionsRanges.map((elem) => coversAll(elem));
const amountOfOverLapingSections = isSectionCoverdByOther.filter(
  (el) => el === true
);

console.log(amountOfOverLapingSections.length);

function createRange(arr: string[]) {
  const [start, end] = arr;
  const sections = [...Array(parseInt(end) - parseInt(start) + 1).keys()].map(
    (x) => x + parseInt(start)
  );
  return sections;
}

function coversAll(sections: number[][]) {
  const [firstElf, secondElf] = sections;
  const results = secondElf.some((el) => firstElf.includes(el));
  return results;
}
