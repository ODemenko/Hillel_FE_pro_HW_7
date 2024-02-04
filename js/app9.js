let number = parseInt(prompt("Enter a natural number"));
let result = [];

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    result.push(i);
  }
}
alert(`Divisors of number ${number}: ${result}`)