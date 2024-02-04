let a = 1;
let b = 500;
let sum = 0;

for (let i = a; i <= b; i++) {
  sum += i;
}
let result  = sum / b;
console.log(`The arithmetic mean of integers from ${a} to ${b} is ${result}`);
