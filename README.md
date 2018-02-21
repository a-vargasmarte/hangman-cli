# hangman-cli

## Intro

This node application is a take on the classic hangman game. Use alphabetical keys in your keyboard to try and uncover the hidden letters of randomly chosen words.

## How it works

### Shortcuts
The following keyboard combinations are totally functional in the game:

1. Exit game: `ctrl + x`.
    * Ends the game and returns user to project directory
2. Skip word: `ctrl + s`.
    * Skips the current word and returns a new random word to guess!

### Winning and losing
If you fail to guess 10 times, you will lose and be given a new random word. To win, you must correctly guess the letters in the hidden word. When you win, you will be presented a new hidden random word.

## Running this app locally

If you want to clone this app from [my github repository](https://github.com/a-vargasmarte/hangman-cli), you need to supply your own `.env` file for it to work.