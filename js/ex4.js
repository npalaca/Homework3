let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

// Validate input
while (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input. Please enter valid numbers.");
  num1 = prompt("Enter first number:");
  num2 = prompt("Enter second number:");
}

num1 = parseInt(num1);
num2 = parseInt(num2);

// Perform calculations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let modulo = num1 % num2;

// Output results
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} * ${num2} = ${product}`);
console.log(`${num1} / ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${modulo}`);
