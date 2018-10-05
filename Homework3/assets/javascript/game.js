
// Creates an array that lists out all of the options.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var compThinking = letters[Math.floor(Math.random() * letters.length)];

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  yourGuesses.push(userGuess);

  if (userGuess == compThinking) {
    wins++;
    guessesLeft = 9;
    yourGuesses.length = 0;
    alert("Whoot!You Won!");
  }
  else if (guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    yourGuesses.length = 0;
    alert("Sorry you lost");
  }
  else if (userGuess !== compThinking) {
    guessesLeft--;
  }

  //Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuesses + "</p>";

  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#psychicGame").innerHTML = html;
};