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
var bulldog = {
    word: "bulldog",
    image: "tbd",
    song: "tbd",
}
var chihuahua = {
    word: "chihuahua",
    image: "tbd",
    song: "tbd",
}
var germanShepard = {
    word: "german shepard",
    image: "tbd",
    song: "tbd",
}

var words = [greyhound, boxer, bulldog, chihuahua, germanShepard];


// pick a word
var newWord = words[Math.floor(Math.random() * words.length)].word;
var wordText = "";
for (var i = 0; i < newWord.length; i++) {
    console.log(newWord.charAt(i));
    console.log(wordText);
    if(newWord.charAt(i)===" "){
        console.log("hit space");
        wordText = wordText +" "+" "+" "+" "+" ";
    } else{
        wordText = wordText + "_"+i+" "+" "+" ";
    }

    // var para = document.createElement("P");                 // Create a <p> element
    // para.innerHTML = "___ ";                // Insert text
    // document.getElementById("myDIV").appendChild(para);     // Append <p> to <div> with id="myDIV"
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
    console.log(wordText);
    word.textContent = wordText;
    console.log(word.textContent);
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

    var letterExists = false;
    // determine if letter exists in the word
    for (var i = 0; i < newWord.length; i++) {
       // console.log(newWord.charAt(i)===userGuess);
        console.log(wordText.indexOf(i));
        //bconsole.log(userGuess);
        if(newWord.charAt(i)===userGuess){
            console.log("if run");
            wordText = wordText.replace(i, userGuess.toUpperCase());
            console.log(wordText);
            word.textContent = wordText;
            letterExists = true;
        }
    }
    if(letterExists == false){
        guessLeft = guessLeft-1;
    }

    if(guessLeft === 0){
        numLosses++;
        alert("Sorry! You didn't guess the word. Better luck next time.")
    }

    // at some point,g add 1 to Numwins
    numWins++;
    // at some point, add 1 to numlosses
    

    userWins.textContent = "Wins: " + numWins;
    userLosses.textContent = "Losses: " + numLosses;
    userGuessesLeft.textContent = "Guesses Remaining: " + guessLeft;
    userGuesses.textContent = "Letters Guessed: " + lettersGuessed;

}