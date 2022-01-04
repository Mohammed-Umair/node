// console.log("i am in Node js");

// function getData() {
//   console.log("I am in function of Node JS");
// }
// getData();
// getData();

// console.log(2 + 5);
// console.log(6-3);
const arr = ["a", "b", "c", "d"];
console.log(arr.splice(2, 0, "e"));
console.log(arr);

const isPrime = (n) =>
  [...Array(n).keys()].slice(2).every((divisor) => n % divisor !== 0);

const primeNumbers = [...Array(101).keys()].filter(isPrime);

console.log(primeNumbers);
