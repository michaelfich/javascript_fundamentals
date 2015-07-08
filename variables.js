// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
var numberOfChildren = 15.3;
var partnersName = "Betty White";
var place = "Deserted Island";
var jobTitle = "Captain";
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
output("You will be a " + jobTitle + " in " + place +
  ", and married to " + partnersName + " with " + numberOfChildren + " kids.");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
var currentYear = new Date().getFullYear();
// Store their birth year in a variable.
var birthYear = 1984;
// Calculate their 2 possible ages based on the stored values.
var topAge = currentYear - birthYear;
var bottomAge = topAge - 1;
// Output them to the screen like so: "They are either NN or NN", substituting the values.
output("They are either " + topAge +" or " + bottomAge);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
var myCurrentAge = 31;
// Store a maximum age into a variable.
var maxAge = 62;
// Store an estimated amount per day (as a number).
var daylyQuantity = 5;
// Calculate how many you would eat total for the rest of your life.
var lifetimeQuantity = (maxAge - myCurrentAge) * (daylyQuantity * 365)
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
output("You will need " + lifetimeQuantity + " to last you until the ripe old age of " + maxAge);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 20;
// Calculate the circumference based on the radius, and output "The circumference is NN".
var circumference = 2 * Math.PI * radius;
output("The circumference is " + circumference)
// Calculate the area based on the radius, and output "The area is NN".
var area = Math.PI * Math.pow(radius, 2);
output("The area is " + area);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
var tempInC = 32;
// Convert it to fahrenheit and output "NN°C is NN°F".
var convertToF = tempInC * 9 / 5 + 32;
output(tempInC + "&deg;C is " + convertToF + "&deg;F");
// Now store a fahrenheit temperature into a variable.
var tempInF = 81;
// Con`vert it to celsius and output "NN°F is NN°C."
var convertToC = (tempInF - 32) * 5 / 9;
output(tempInF + "°F is " + convertToC + "°C.");
