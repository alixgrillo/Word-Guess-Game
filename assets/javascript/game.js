var numWins = 0;
var numLosses = 0;
var guessLeft = 10;
var lettersGuessed = [];
var letterGuessDisplay = "";

var greyhound = {
    word: "greyhound",
    image: "assets/images/greyhound.jpg",
    song: "assets/sounds/labrador-barking-daniel_simon.mp3",
}
var boxer = {
    word: "boxer",
    image: "assets/images/boxer.jpg",
    song: "assets/sounds/Puppy Dog Barking-SoundBible.com-871302192.mp3",
}
var bulldog = {
    word: "bulldog",
    image: "assets/images/bulldog.jpg",
    song: "assets/sounds/Dog Woof-SoundBible.com-457935112.mp3",
}
var chihuahua = {
    word: "chihuahua",
    image: "assets/images/chihuahua.webp",
    song: "assets/sounds/small-dog-barking_daniel-simion.mp3",
}
var germanShepard = {
    word: "german shepard",
    image: "assets/images/german_shephard.jpg",
    song: "assets/sounds/german-shephard-daniel_simon.mp3",
}
var labradoodle = {
    word: "labradoodle",
    image: "assets/images/labradoodle.jpg",
    song: "assets/sounds/labrador-barking-daniel_simon.mp3",
}
var pomeranian = {
    word: "pomeranian",
    image: "assets/images/pomeranian.jpg",
    song: "assets/sounds/small-dog-barking_daniel-simion.mp3",
}
var newfoundland = {
    word: "newfoundland",
    image: "assets/images/newfoundland.jpg",
    song: "assets/sounds/Dog Barking-SoundBible.com-1918920417.mp3",
}

var words = [greyhound, boxer, bulldog, chihuahua, germanShepard, labradoodle, pomeranian, newfoundland];

var numLetters = 0;
var correctLetters = 0;
var wordText = "";
var newWordG = pickWord();
var newWord = newWordG.word;
var newWordP = newWordG.image;
var newWordS = newWordG.song;


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

function pickNewWord(){
    // re-initialize js element ids
    var userGuessesLeft = document.getElementById("numGuesses");
    var userGuesses = document.getElementById("guessedLetters");
    var word = document.getElementById("word");
    
    // reset values for a new sub-game
    document.getElementById("result").textContent = "";
    wordText = "";
    guessLeft = 10;
    lettersGuessed = [];
    letterGuessDisplay = "";

    // reset values on the page based on new value, including removing image
    correctLetters = 0;
    numLetters = 0;
    userGuessesLeft.textContent = "Guesses Remaining: " + guessLeft;
    userGuesses.textContent = "Letters Guessed: " + letterGuessDisplay;
    document.getElementById("image").innerHTML = '';
    
    // run the logic to "pick" a new word and set it up on the page
    var startNewWord = pickWord();
    word.textContent = wordText;
    return startNewWord;
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
    userGuesses.textContent = "Letters Guessed: " + letterGuessDisplay;
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
            if(userGuess.toUpperCase() === lettersGuessed[j]){
                guessDuplicate=true;
            }
        }
        
        // only continue if the letter hasn't been guessed yet
        if(guessDuplicate===false){

            // add letter chosen to the letters guessed list
            lettersGuessed.push(userGuess.toUpperCase());
            letterGuessDisplay += userGuess.toUpperCase() + '\xa0';
        
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
                    updatedWordText += wordText.substring(i*6,i*6+6);
                }
            }
            wordText = updatedWordText;
            // update the section on the page to show the user any updates with correct guesses
            word.textContent = wordText;
            
            // deduct a guess if they incorrectly guessed
            if(letterExists == false){
                guessLeft = guessLeft-1;
            }
            console.log("correctLetters" + correctLetters + " number of letters " + numLetters);
            // if there are not any guesses left, add a loss and alert the user that they didn't guess correctly
            if(guessLeft === 0){
                numLosses++;
                document.getElementById("result").innerHTML = "<p>There are no more guesses available and you didn't pick the correct word. Please hit the space bar to start a new game.";
                document.getElementById("result").className = "lossText";
    
                // if they guessed all of the correct letters, add a win and alert the user that they guessed correctly
            } else if(correctLetters===numLetters){
                numWins++;
                // update image, play sound, and let the user know that they won
                document.getElementById("image").innerHTML = '<img src=' + newWordP + ' width= 400px />';
                document.getElementById("result").innerHTML = "<p>Congrats! You picked the right word! Please hit the space bar to start a new game.";
                document.getElementById("result").className = "winText";
                playSound();
            }

     
            // update the counters
            userWins.textContent = "Wins: " + numWins;
            userLosses.textContent = "Losses: " + numLosses;
            userGuessesLeft.textContent = "Guesses Remaining: " + guessLeft;
            userGuesses.textContent = "Letters Guessed: " + letterGuessDisplay;
        }
        // when the game is "over", the user needs to hit the space bar in order to start a new game
    } else if (userGuessCode === 32 && (correctLetters===numLetters || guessLeft ===0)){
        var newWordTmp = newWordG;
        // do while loop keeps the same word from coming up twice in a row
        do{
            newWordG = pickNewWord();
        }
        while(newWordG === newWordTmp)        
        newWord = newWordG.word;
        newWordP = newWordG.image;
        newWordS = newWordG.song;

    }
    //function that will play the associated sound when the word is picked correctly
    function playSound() {
        console.log("playing sound");
        const sound = new Audio()
        sound.src = newWordS;
        sound.play();
    }


}
