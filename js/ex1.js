let num = prompt("Enter a number between 1 and 100:");
num = parseInt(num);

if (num >= 1 && num <= 100) {
  console.log("Thank you! You entered " + num + ", a valid number.");
} else {
  console.log("Sorry, " + num + " is not a valid entry.");
}