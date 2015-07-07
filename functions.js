// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
function tellFortune(children, partner, place, job) {
  document.write("<p>You will be a " + job + " in " + place +
    ", and married to " + partner + " with " + children + " kids.</p>");
}
tellFortune(6, "Barbara Bush", "Texas", "Cowboy");
tellFortune(3, "Beyonce", "New York", "Janitor");
tellFortune(4, "Helen Keller", "Zimbabwe", "President")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
function calculateAge(birthYear, currentYear) {
  currentYear = currentYear || new Date().getFullYear();
  var ages = [
    currentYear - birthYear,
    currentYear - birthYear - 1
  ];
  document.write("<p>They are either " + ages[0] +" or " + ages[1] + "</p>");
}
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
calculateAge(1984, 2020);
calculateAge(1984);
calculateAge(2000, 2020);
calculateAge(2000);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
function calculateSupply(age, quantity) {
  var maxAge = 75;
  var total = (maxAge - age) * (quantity * 365);
  console.log(total);
  document.write("<p>You will need " + Math.round(total) +
    " to last you until the ripe old age of " + maxAge + "</p>");
}
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.
calculateSupply(31, 1.23);
calculateSupply(45, 8.97);
calculateSupply(18, 2.1);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
function calcCircumfrence(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("<p>The circumference is " + circumference + "</p>");
}

calcCircumfrence(25);
calcCircumfrence(32);
calcCircumfrence(45.5);

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  document.write("<p>The area is " + area + "</p>");
}

calcArea(25);
calcArea(32);
calcArea(45.5);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
function celsiusToFahrenheit(celsius) {
  var fahrenheit = celsius * 9 / 5 + 32;
  document.write("<p>" + celsius + "&deg;C is " + fahrenheit + "&deg;F</p>");
}

celsiusToFahrenheit(0);
celsiusToFahrenheit(32);
celsiusToFahrenheit(65);

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function fahrenheitToCelsius(fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9;
  document.write("<p>" + fahrenheit + "°F is " + celsius + "°C.</p>");
}

fahrenheitToCelsius(32);
fahrenheitToCelsius(65);
fahrenheitToCelsius(100);
