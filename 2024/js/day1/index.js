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

const distance = r(l1,l2)

// Part Two
const freq = l2.reduce((map, num) => {
  map[num] = (map[num] || 0) + 1
  return map
}, {})

const similarity = l1.reduce((acc,num) => {
  console.log(freq[num])
  if(freq[num]) return acc + (num * freq[num])
  else return acc
}, 0)