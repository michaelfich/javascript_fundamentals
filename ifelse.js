// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(one, two) {
  if (one > two) {
    return one
  } else {
    return two;
  }
}

document.write("<p>" + greaterNum(5, 9) + " is the biggest number in the first pair</p>")
document.write("<p>" + greaterNum(18, 9) + " is the biggest number in the first pair</p>")

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language) {
  switch (language) {
    case "es":
      return "Hola Mundo";
    case "fr":
      return "Hallo Welt";
    case "de":
      return "Bonjour Le Monde";
    default:
      return "Hello, World";
  }
}

document.write("<p>English: " + helloWorld("en") + "</p>");
document.write("<p>Spanish: " + helloWorld("es") + "</p>");
document.write("<p>French: " + helloWorld("fr") + "</p>");
document.write("<p>German: " + helloWorld("de") + "</p>");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(number) {
  if (number >= 80) {
    return "A";
  } else if (number >= 70) {
    return "B";
  } else if (number >= 60) {
    return "C";
  } else if (number >= 50) {
    return "D";
  } else {
    return "F";
  }
}
document.write("<p>Grade: " + assignGrade(53) + "</p>")
document.write("<p>Grade: " + assignGrade(82) + "</p>")
document.write("<p>Grade: " + assignGrade(13) + "</p>")
document.write("<p>Grade: " + assignGrade(79) + "</p>")
document.write("<p>Grade: " + assignGrade(65) + "</p>")

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralize(noun, number) {
  var result = number + " " + noun;
  var plural = number != 1;

  if (plural) {
    switch (noun) {
      case "goose":
        return number + " geese";
      case "mouse":
        return number + " mice";
      case "deer":
        break;
      case "sheep":
        break;
      case "moose":
        break;
      case "swine":
        break;
      case "bison":
        break;
      default:
        return result + "s";
    }
  }
  return result;
}
document.write("<p>" + pluralize("cat", 3) + "</p>");
document.write("<p>" + pluralize("dog", 1) + "</p>");
document.write("<p>" + pluralize("mouse", 4) + "</p>");
document.write("<p>" + pluralize("sine", 2) + "</p>");
document.write("<p>" + pluralize("goose", 5) + "</p>");

