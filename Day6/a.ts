import * as fs from 'fs';

const input = fs.readFileSync("input.txt", "utf-8").split("");

for (let i = 0; i < input.length; i++) {
    let sequence = new Set(input.slice(i, i + 4));
    if (sequence.size === 4) {
        console.log(i + 4)
        break;
    }
}










