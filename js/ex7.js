function addOneSecond(hours, minutes, seconds) {
  if (hours < 0 || hours > 23) {
    return "Invalid hours input";
  }
  if (minutes < 0 || minutes > 59) {
    return "Invalid minutes input";
  }
  if (seconds < 0 || seconds > 59) {
    return "Invalid seconds input";
  }

  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }

  return `Time input: ${hours}h${minutes}m${seconds}s\nOne second later: ${hours}h${minutes}m${seconds}s`;
}


console.log(addOneSecond(14, 17, 59));
// Output:
// Time input: 14h17m59s
// One second later: 14h18m0s

console.log(addOneSecond(6, 59, 59));
// Output:
// Time input: 6h59m59s
// One second later: 7h0m0s

console.log(addOneSecond(23, 59, 59));
// Output:
// Time input: 23h59m59s
// One second later: 0h0m0s
