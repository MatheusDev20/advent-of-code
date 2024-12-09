const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const levels = input.replace(/\r/g, "").split("\n").map(x => x.split(' ').map(Number)) 

// [
//   60, 59, 58, 55,
//   53, 51, 48, 46
// ],
const isSafeReport = (report) => {
  const firstComparison = report[0] - report[1] 
  if(Math.abs(firstComparison) < 1 || Math.abs(firstComparison) > 3) return false
  const direction = firstComparison > 0 ? "decrease" : "increase"

  for(let i = 1; i < report.length -1; i++) {
    const iterationComparision = report[i] - report[i+1]
    if(iterationComparision === 0) return false

    const iterationDir = iterationComparision > 0 ? "decrease" : "increase"
    if (iterationDir !== direction) return false;
    if(Math.abs(iterationComparision) < 1 || Math.abs(iterationComparision) > 3) return false
  }

  return true
}

const safeReports = levels.filter(isSafeReport);
console.log("Safe reports:", safeReports.length);