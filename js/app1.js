// let a = 10;
// let numbers = [];

// for (let i = a; i <= a + 10; i++) {
//     numbers.push(i);
// }
// console.log(numbers.join(','))


let a = 10;
let numbers = "";

for (let i = a; i <= a + 10; i++) {
    numbers += i;
    if (i < 20) {
        numbers += ", ";
    }
}
console.log(numbers)