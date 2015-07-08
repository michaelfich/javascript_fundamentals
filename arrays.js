// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

function topChoices(arr) {
  var suffix = new String();
  var st, nd, rd;
  for (var counter = 1; counter <= arr.length; counter++) {
    st = (counter % 10 == 1  && counter % 100 != 11);
    nd = (counter % 10 == 2  && counter % 100 != 12);
    rd = (counter % 10 == 3  && counter % 100 != 13);

    if (st) {
      suffix = "st";
    } else if (nd) {
      suffix = "nd";
    } else if (rd) {
      suffix = "rd";
    } else {
      suffix = "th";
    }
    output("My " + counter + suffix + " choice is " + arr[counter-1]);
  }
}

movies = [
  "The Dark Knight",
  "Man of Steel",
  "Avengers: Age of Ultron",
  "X-Men: Days of Future Past",
  "Captain America: The Winter Soldier",
  "The Amazing Spiderman",
];

topChoices(movies);