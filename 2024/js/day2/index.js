const fs = require("fs");
const path = require("path");
const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

const levels = input.replace(/\r/g, "").split("\n").map(x => x.split(' ').map(Number)) 


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
function tolerabeReport(report) {
	if (isSafeReport(report)) return true;

	for (let i = 0; i < report.length; i++) {
		const trimmedReport = report.slice();
		trimmedReport.splice(i, 1);
		if (isSafeReport(trimmedReport)) return true;
	}

	return false;
}
tolerabeReport([60, 59, 58, 55, 53, 51, 48, 46])
// const safeReports = levels.filter(tolerabeReport);
// console.log("Safe reports:", safeReports.length);

const arr = [1,2,3,4]
console.log(arr.splice(1,1))