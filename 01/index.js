const readline = require("readline-sync");
const numbers = [];
let total = 0;

while (true) {
  const number = readline.question("Write a number or E for exit: ");
  const formattedNumber = parseInt(number);
  
  if (!formattedNumber) break;

  numbers.push(formattedNumber);
}

numbers.forEach((number) => {
  if (number % 2 === 0) total += number;
});

console.log('total: ', total);