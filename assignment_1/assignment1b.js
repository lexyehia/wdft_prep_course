// Exercise 1

const name = 'Chad Yehia';
console.log(`Hello ${name}`);

// Excercise 2

const x = 1125;
const answer = x % 2;
console.log(answer);

// Exercise 3

const a = true;
const b = false;
const c = true;

console.log(a || b || c);

// Exercise 4

console.log(a && b && c);

// Exercise 5

const answer1 = 10 - 3 * 5/4 + 202 % 3;
const answer2 = 10 - (3 * (5/4) + (202 % 3));

console.log(answer1);
console.log(answer2);

// answer1, multiplication between 3 * 5 occurs before division
// answer2, because of grouping, division 5/4 occurs before multiplication
