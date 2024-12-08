const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const lines = input.replace(/\r/g, "").split("\n").filter(x => x != "").map((x) => x.split(" ").filter(x => x != "").map(x => Number(x.trim())))
// first element of each pair is actually an element of L1 or L2
const l1 = lines.map(x => x[0]).sort((a, b) => a - b)
const l2 = lines.map(x => x[1]).sort((a, b) => a - b)

const total = l1.reduce((acc, el, index) => acc + Math.abs(el - l2[index]), 0)

console.log("Total", total)