//synchronous

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first);
// console.log(second);

// writeFileSync("./content/third.txt", `result is: ${first} + ${second}`, {
//   flag: "a",
// });

// const third = readFileSync("./content/third.txt", "utf-8");

// console.log(third);

//asynchronous

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
