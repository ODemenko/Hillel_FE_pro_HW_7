// let a = 20;
// let b = 2; 
// let numbers = [];

// for (let i = a; i <= a + 10; i++) {
//     let number = i**b;
//     numbers.push(number);
// }
// console.log(numbers.join(','));

let a = 20;
let b = 2; 
let numbers = "";

for (let i = a; i <= a + 10; i++) {
    let number = i**b;
    numbers += number + " ";
}
console.log(numbers);