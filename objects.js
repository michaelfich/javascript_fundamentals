// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
function Recipe(title, servings, ingredients) {
  this.title = title;
  this.servings = servings;
  this.ingredients = ingredients;
};
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var recipe = new Recipe("Mole", 2, ["cinnamon", "cumin", "cocoa"]);
output
output("Serves: " + recipe.servings);
output("Ingredients");
recipe.ingredients.forEach(function(i) {
  output(i);
});

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
function Book(title, author, alreadyRead) {
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
}

books = [
  new Book("1984", "George Orwell", true),
  new Book("To Kill a Mockingbird", "Harper Lee", false),
  new Book("Lord of the Flies", "William Golding", false),
  new Book("Of Mice and Men", "John Steinbeck", true),
  new Book("Crime and Punishment", "Fyodor Dostoyevsky", false),
];
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
books.forEach(function (book) {
  result = book.title + " by " + book.author;
  if (book.alreadyRead) {
    result = "You have already read " + result;
  } else {
    result = "You still need to read " + result;
  }
  output(result);
});

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
function Movie(title, duration, stars) {
  this.title = title;
  this.duration = duration;
  this.stars = stars;
  this.string = function() {
    return this.title + " lasts for " + this.duration + " minutes. " + "Stars: " + this.stars.join(", ") + ".";
  }
}

movies = [
  new Movie("The Dark Knight", 152, ["Christian Bale", "Heath Ledger", "Morgan Freeman"]),
  new Movie("Avengers: Age of Ultron", 141, ["Robert Downey Jr", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Scarlet Johansson"]),
  new Movie("X-Men: Days of Future Past", 132, ["Hugh Jackman", "James McAvoy", "Jennifer Lawrence"]),
  new Movie("Man of Steel", 143, ["Henry Cavill", "Amy Adams", "Michael Shannon", "Russell Crowe", "Kevin Costner"])
];

movies.forEach(function(movie) {
  output(movie.string());
});