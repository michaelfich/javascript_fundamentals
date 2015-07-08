// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
for (var i = 0; i <= 20; i++) {
  even = (i % 2 == 0);
  if (even) {
    output(i + " is even.");
  } else {
    output(i + " is odd.")
  }
}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for (var multiplier = 0; multiplier <= 10; multiplier++) {
  output(multiplier + " * 9 = " + multiplier * 9);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
var table = "<table class=\"multiplication\">";
var row = new String();
var product = new Number();
for (var x = 1; x <= 10; x++) {
  row = "<tr>";
  for (var y = 1; y <= 10; y++) {
    product = x * y;
    row += "<td>" + product + "</td>";
  }
  row += "</tr>";
  table += row;
}
table += "</table>";
output(table);

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every
// value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
var message = new String();
for (var grade = 60; grade <= 100; grade++) {
  output("For " + grade + ", you got a " + assignGrade(grade));
}

