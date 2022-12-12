import * as fs from 'fs';

const input = fs.readFileSync("input.txt", "utf-8").split("");

for (let i = 0; i < input.length; i++) {
    let sequence = new Set(input.slice(i, i + 14));
    if (sequence.size === 14) {
        console.log(i + 14)
        break;
    }
}
