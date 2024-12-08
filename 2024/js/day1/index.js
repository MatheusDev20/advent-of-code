const fs = require("fs")
const readline = require("readline")

const processInput = () => {
  const list1 = []
  const list2 = []

  return new Promise((resolve) => {
    const input = readline.createInterface({
      input: fs.createReadStream("./input.txt"),
      output: process.stdout,
      terminal: false
    })

    input.on("line", (line) => {
      let pair = line.split(" ").filter((l) => l)
      list1.push(pair[0])
      list2.push(pair[1])
    })

    input.on("close", () => {
      resolve({ list1, list2 });
    });
  })
}
const smallest = (array) => {
  let smallest = array[0]
  for (let i = 1; i < array.length; i++) {
    if (smallest > array[i]) smallest = array[i]
  }
  return smallest
}

async function main() {
  const { list1, list2 } = await processInput()
  const dist = exec(list1, list2)
  console.log("Dist", dist)
 }  

exec = (list1, list2) => {
  if((list1.length === 0 && list2.length === 0)) return 0;

  const el1 = smallest(list1)
  const el2 = smallest(list2)
  
  list1.splice(list1.indexOf(el1), 1);
  list2.splice(list2.indexOf(el2), 1);

  return Math.abs(el1 - el2) + exec(list1, list2) 
}

main()