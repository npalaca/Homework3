let password = "secret";
let attempts = 0;

while (attempts < 3) {
  let userPassword = prompt("Enter password:");
  if (userPassword === password) {
    console.log(`You entered the correct password after ${attempts + 1} attempt(s)`);
    break;
  } else {
    attempts++;
  }
}

if (attempts === 3) {
  console.log("You have exceeded the maximum number of attempts.");
}



6.
const number = 3;
for (let i = 0; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}
