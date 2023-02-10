let dayEntered = prompt("Enter a day of the week (using three letter abbreviation in lower case):").toLowerCase();

switch (dayEntered) {
  case "sun":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "mon");
    break;
  case "mon":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "tue");
    break;
  case "tue":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "wed");
    break;
  case "wed":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "thu");
    break;
  case "thu":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "fri");
    break;
  case "fri":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "sat");
    break;
  case "sat":
    console.log("You entered: " + dayEntered + "\nThe following day is: " + "sun");
    break;
  default:
    console.log("Invalid input. Please enter a valid day of the week using three letter abbreviation in lower case.");
    break;
}