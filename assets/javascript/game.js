var numWins = 0;
var numLosses = 0;
var guessLeft = 10;
var lettersGuessed = [];

var greyhound = {
    word: "greyhound",
    image: "assets/images/greyhound.jpg",
    song: "tbd",
}
var boxer = {
    word: "boxer",
    image: "assets/images/boxer.jpg",
    song: "tbd",
}
var bulldog = {
    word: "bulldog",
    image: "assets/images/bulldog.jpg",
    song: "tbd",
}
var chihuahua = {
    word: "chihuahua",
    image: "assets/images/chihuahua.webp",
    song: "tbd",
}
var germanShepard = {
    word: "german shepard",
    image: "assets/images/german_shephard.jpg",
    song: "tbd",
}

var words = [greyhound, boxer, bulldog, chihuahua, germanShepard];

var numLetters = 0;
var correctLetters = 0;
var wordText = "";
var newWordG = pickWord();
var newWord = newWordG.word;
var newWordP = newWordG.image;


function pickWord(){
    // pick a word
    var newWord = words[Math.floor(Math.random() * words.length)];
    console.log(newWord);

    for (var i = 0; i < newWord.word.length; i++) {
        if(newWord.word.charAt(i)===" "){
            // if there is a space in the word, do not generate a line, but maintain the spacing
            wordText = wordText + '\xa0\xa0\xa0\xa0\xa0\xa0';
        } else{
            // for each letter, add an ___ to show as a placeholder for a letter
            wordText = wordText + "___"+ '\xa0\xa0\xa0';
            numLetters++;
        }
    }
    return newWord;
}

// run this when the page loads - this will load the initial text
function loadPage() {
    
    // Create variables that hold references to the places in the HTML where we want to display things.
    var userWins = document.getElementById("numWins");
    var userLosses = document.getElementById("numLosses");
    var userGuessesLeft = document.getElementById("numGuesses");
    var userGuesses = document.getElementById("guessedLetters");
    var word = document.getElementById("word");

    // display text on the page 
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
    var userGuessCode = event.keyCode;
    var guessDuplicate = false;

    // limit the following logic to only alpha characters (A-65 to Z-90)
    if(userGuessCode > 64 && userGuessCode < 91){

        for(var j=0; j<lettersGuessed.length; j++){
            if(userGuess === lettersGuessed[j]){
                guessDuplicate=true;
            }
        }
        
        if(guessDuplicate===false){

            // add letter chosen to the letters guessed list
            lettersGuessed.push(userGuess);
        
           // user boolean to determine if the letter exists to give user credit for picking the correct value
            var letterExists = false;
            
            // track a new wordText that will concatenate the answer
            var updatedWordText = "";

            // determine if letter exists in the word
            for (var i = 0; i < newWord.length; i++) {
                if(newWord.charAt(i)===userGuess){
                    // update the wordText to show the correctly guessed letter
                    updatedWordText = updatedWordText + "_" + userGuess.toUpperCase() + "_"+ '\xa0\xa0\xa0';
                    // show that the letter exists so that a guess remaining is not deducted
                    letterExists = true;
                    // add 1 to correct letters to help determine when the whole word has been chosen
                    correctLetters++;
                } else{
                    // concatenate wordText with previously saved sections
                    updatedWordText = updatedWordText + wordText.substring(i*6,i*6+6);
                }
            }
            wordText = updatedWordText;
            // update the section on the page to show the user any updates with correct guesses
            word.textContent = wordText;
            
            // deduct a guess if they incorrectly guessed
            if(letterExists == false){
                guessLeft = guessLeft-1;
            }
            // if there are not any guesses left, add a loss and alert the user that they didn't guess correctly
            if(guessLeft === 0){
                numLosses++;
                alert("Sorry! You didn't guess the word. Better luck next time.")
                pickWord();

            // if they guessed all of the correct letters, add a win and alert the user that they guessed correctly
            } else if(correctLetters===numLetters){
                numWins++;
                // at some point,g add 1 to Numwins
                document.getElementById("image").innerHTML = '<img src=' + newWordP + ' />';
                alert("Congrats! You picked the right word!");
                pickWord();
            }

        
            

            
            // 
            userWins.textContent = "Wins: " + numWins;
            userLosses.textContent = "Losses: " + numLosses;
            userGuessesLeft.textContent = "Guesses Remaining: " + guessLeft;
            userGuesses.textContent = "Letters Guessed: " + lettersGuessed;
        }
    }
}

// items to complete: image shows up after; reload word; styling,