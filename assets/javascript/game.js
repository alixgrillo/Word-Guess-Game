console.log("has started");

var numWins = 0;
var numLosses = 0;
var guessLeft = 10;
var lettersGuessed = [];



var greyhound = {
    word: "greyhound",
    image: "tbd",
    song: "tbd",
}
var boxer = {
    word: "boxer",
    image: "tbd",
    song: "tbd",
}

var words = [greyhound, boxer];

// pick a word
var newWord = words[Math.floor(Math.random() * words.length)].word;
var wordText = "";
for (var i = 0; i < newWord.length; i++) {
    wordText = wordText + "_"+i+" ";
}

function loadPage() {
    
    // Create variables that hold references to the places in the HTML where we want to display things.
    var userWins = document.getElementById("numWins");
    var userLosses = document.getElementById("numLosses");
    var userGuessesLeft = document.getElementById("numGuesses");
    var userGuesses = document.getElementById("guessedLetters");
    var word = document.getElementById("word");

    userWins.textContent = "Wins: " + numWins;
    userLosses.textContent = "Losses: " + numLosses;
    userGuessesLeft.textContent = "Guesses Remaining: " + guessLeft;
    userGuesses.textContent = "Letters Guessed: " + lettersGuessed;
    word.textContent = wordText;
}


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Create variables that hold references to the places in the HTML where we want to display things.
    var userWins = document.getElementById("numWins");
    var userLosses = document.getElementById("numLosses");
    var userGuessesLeft = document.getElementById("numGuesses");
    var userGuesses = document.getElementById("guessedLetters");
    var word = document.getElementById("word");

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    // add letter chosen to the letters guessed list
    lettersGuessed.push(userGuess);


    // determine if letter exists in the word
    for (var i = 0; i < newWord.length; i++) {
       // console.log(newWord.charAt(i)===userGuess);
        console.log(wordText.indexOf(i));
        //bconsole.log(userGuess);
        if(newWord.charAt(i)===userGuess){
            console.log("if run");
            wordText.replace("0", userGuess);
            console.log(wordText);
            word.textContent = wordText;
        }
    }

    // at some point,g add 1 to Numwins
    numWins++;
    // at some point, add 1 to numlosses
    numLosses++;

    userWins.textContent = "Wins: " + numWins;
    userLosses.textContent = "Losses: " + numLosses;
    userGuessesLeft.textContent = "Guesses Remaining: " + guessLeft;
    userGuesses.textContent = "Letters Guessed: " + lettersGuessed;

}