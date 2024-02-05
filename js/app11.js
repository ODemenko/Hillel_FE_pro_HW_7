let number = parseInt(prompt("Enter a natural number"));
let result = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    result += i;
  }
}
alert(`Sum of even divisors of a number ${number} is: ${result}`);