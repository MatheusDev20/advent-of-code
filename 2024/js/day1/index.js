const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const lines = input.replace(/\r/g, "").split("\n").filter(x => x != "").map((x) => x.split(" ").filter(x => x != "").map(x => Number(x.trim())))
// first element of each pair is actually an element of L1 or L2
const l1 = lines.map(x => x[0]).sort((a, b) => a - b)
const l2 = lines.map(x => x[1]).sort((a, b) => a - b)

const r = (l1, l2) => 
  l1.length === 0 || l2.length === 0
    ? 0
    : Math.abs(l1[0] - l2[0]) + r(l1.slice(1), l2.slice(1));

console.log("Distance", r(l1,l2))

// Part Two
let similarity = []
for(let i = 0; i < l1.length; i++) {
  let ocurrence = 0;
  for(let j = 0; j < l2.length; j++) 
    if(l1[i] === l2[j]) ocurrence++

  similarity.push({n: l1[i], ocurrence})
}

const total = similarity.reduce((acc, el) => acc + (el["n"] * el["ocurrence"]) , 0)
console.log("Similarity", total)