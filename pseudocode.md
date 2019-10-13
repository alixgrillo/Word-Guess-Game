## Word Guess Game Pseudocode

# Game Initializes

* A banner across the top that demonstrates the theme. 

* A section with instructions on how to play. User will choose
letters by pressing keys.

* A "random" word will generate from a short list of options.
There should be a _ for each letter in the word giving the user 
a clue as to how long the word is.

* There should be a scoreboard that tracks the following:
    1. Number of wins if user picks word before running out of
    tries.
    2. Number of losses is the number of wrong guesses runs out
    before the word is guessed.
    3. Number of wrong guesses allowed - start at 10.
    4. Previous guessed letters - this is a placeholder and will
    fill as user guesses letters.

# Game Starts

1. User presses a key on the keyboard. The computer logs the
letter chosen.

2. Determine if the letter is contained in the word. If the
letter is in the word, do the following:
    a. Change any "__" placeholders to the chosen letter.
    b. Add letter to the list of previous choices.

    else,
    a. Add letter to the list of previous choices.
    b. Deduct 1 from the number of wrong guesses allowed.

3. If number of wrong guesses allowed reaches 0, then do
the following:
    a. Alert the user that they have run out of guesses.
    b. Add 1 to the number of losses.
    c. Ask user if they would like to initialize a new game.

4. If all letters in the word are chosen, do the following:
    a. Alert the user that they have found the word.
    b. Add 1 to the number of wins.
    c. Play specified music and show specified image.
    d. Ask user if they would like to initialize a new game.