let name = prompt("Please enter your name:");
let units = prompt("Please enter the number of units completed:");

// Validate input
if (isNaN(units) || units < 0 || units % 1 !== 0) {
  alert("Invalid input. Please enter a positive integer.");
  return;
}

let gradeStanding;
if (units >= 0 && units <= 30) {
  gradeStanding = "Freshman";
} else if (units >= 31 && units <= 60) {
  gradeStanding = "Sophomore";
} else if (units >= 61 && units <= 90) {
  gradeStanding = "Junior";
} else {
  gradeStanding = "Senior";
}

// Output
alert(`Hello ${name}
Your grade standing is ${gradeStanding}`);
t