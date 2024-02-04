let a = 30;
let b = 80;
let result = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}
console.log(`The sum of even numbers from ${a} to ${b} is ${result}`);