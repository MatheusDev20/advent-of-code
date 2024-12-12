const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");
const lines = input.replace(/\r/g, "").split("\n").filter(x => x != "").map(x => x.matchAll(/mul\((\d+),(\d+)\)/g));

// const linesPt2 = input1.replace(/\r/g, "").split("\n").filter(x => x != "").map(x => x.matchAll(/(?:mul\((\d+),(\d+)\))|(?:do\(\))|(?:don't\(\))/g));
//const linesPt3 = input1.replace(/\r/g, "").split("\n").filter(x => x != "").map(x => x.matchAll(/(?:mul\((\d+),(\d+)\))|(?:do\(\))|(?:don't\(\))/g));

const total = lines.reduce((acc, regG) => {
  let sum = 0
  for(let r of regG) {
    sum += parseInt(r[1]) * parseInt(r[2])
  }
  return acc + sum
}, 0)

const totalPt2 = linesPt3.reduce((acc, regG) => {
  let sum = 0
  for(let r of regG) {
    console.log("R", r)
  }
  return acc + sum
})
