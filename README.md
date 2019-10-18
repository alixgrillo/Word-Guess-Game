# Word-Guess-Game
Hangman Challenge


<img src="/assets/images/cover-photo.jpg">


## Table of Contents
* [About](#about)
* [How to Play](#how-to-play)
* [Requirements](#requirements)
* [Build Tools](#build-tools)
* [Acknowledgements](#acknowledgements)
* [License](#license)


## About
The Word Guess Game is a letter guessing game that allows the user to attempt to pick a word chosen by
the computer. To play this game, the user must use the letters on their keyboard to guess a letter. If 
a letter has already been guessed, the game will not allow that key to be pressed again. If the word is 
chosen successfully, the user will be rewarded with a picture and sound.

<img src="/assets/images/initial-game-screen.png">

## How to Play
To begin the game, the user can press any alpha key on the keyboard to "guess" a letter. If the letter
is contained in the word, it will show up in the word. Otherwise, the guess is incorrect and the number
of guesses remaining will reduce by 1. Regardless of a correct or incorrect guess, the letter will show up
in the letters guessed list.

<img src="/assets/images/game-with-letters-chosen.png">

If the all of the letters in the word are chosen correctly, the game will be considered a WIN. A picture
and a sound will generate. <em> Hit the SPACE bar to start a new game. </em>

<img src="/assets/images/game-winner.png">

If the the number of guesses reduces to zero before all of the letter are chosen correctly, the game is 
lost - try again to figure out the word. <em> Hit the SPACE bar to start a new game. </em>

<img src="/assets/images/game-loser.png">


## Requirements
There are no requirements for this game.

## Build Tools
* HTML/CSS
* Bootstrap
* Javascript

## Acknowledgements
* Thanks to SoundBible.com for sharing the sound file.
* GetBootstrap.com
* https://www.toptal.com/designers/subtlepatterns/

## License
This project was created by [John Garrett](https://github.com/alixgrillo).    
[License](https://github.com/alixgrillo/Word-Guess/Game/LICENSE.md) 
