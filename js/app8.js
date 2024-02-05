// let a = 100;
// let b = 200;
// let result = [];

// for (let i = a; i <= b; i++) {
//   if (i % 3 === 0) {
//     result.push(i);
//   }
// }
// console.log(`Numbers in the range from ${a} to ${b} are multiples of 3 is: ${result}`);


let a = 100;
let b = 200;
let result = "";

for (let i = a; i <= b; i++) {
  if (i % 3 === 0) {
    result += i + " ";
  }
}
console.log(`Numbers in the range from ${a} to ${b} are multiples of 3 is: ${result}`);