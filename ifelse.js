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

output(greaterNum(5, 9) + " is the biggest number in the first pair")
output(greaterNum(18, 9) + " is the biggest number in the first pair")

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

output("English: " + helloWorld("en"));
output("Spanish: " + helloWorld("es"));
output("French: " + helloWorld("fr"));
output("German: " + helloWorld("de"));

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(number) {
  if (number >= 90) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else {
    return "F";
  }
}
output("Grade: " + assignGrade(53))
output("Grade: " + assignGrade(82))
output("Grade: " + assignGrade(64))
output("Grade: " + assignGrade(79))
output("Grade: " + assignGrade(98))

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
output(pluralize("cat", 3));
output(pluralize("dog", 1));
output(pluralize("mouse", 4));
output(pluralize("sine", 2));
output(pluralize("goose", 5));

