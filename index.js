// this script depends on words.js
const Word = require('./word.js');

// we also require the inquirer package
const inquirer = require('inquirer');

const readline = require('readline');
// console.log(readline);
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// we have a bunch of words in a wordBank array
let wordBank = ['grenadine', 'pomegranate', 'hefty', 'gladiolus', 'pelter',
    'concretize', 'manikin', 'canvass', 'lubberly', 'cordial', 'jocular',
    'Utopian', 'tamp', 'subnormality', 'obbligato', 'woodsy', 'ha-ha',
    'stevedore', 'effervescence', 'bromidic', 'canoodle', 'satrap',
    'congeries', 'twain', 'kittiwake', 'polysemy', 'madrigal', 'bollard',
    'parvenu', 'bowdlerize', 'mountebank', 'hauteur', 'asphodel',
    'annulment', 'quasi', 'Yugoslavia', 'paleobotany', 'cephalopodan'];

let wins = 0;
let losses = 0;
// we declare a variable that holds our guesses left
let guessesLeft = 10;

let pickedWord;

// we declare a function to pick a random word from the wordBank
function pickWord() {
    // we store a random word from wordBank in the randomWord argument
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // console.log(pickedWord);
    // then we use the Word constructor to store it
    pickedWord = new Word(pickedWord);
}

pickWord();
console.log(pickedWord.toString());
// console.log(pickedWord)

// we declare a variable to count how many times the user is prompted to guess
let count = 0;
// array in which we will store right guesses
let rightGuesses = [];

// array in which we will store wrong guesses
let wrongGuesses = [];

// array containing all concactenated guesses
let allGuesses = [];

// array in which we store keys pressed
let keysPressed = [];

// function that resets all above empty arrays



// // we declare a function where we recursively prompt the user to guess
// let userPrompt = function () {
//     // if statements to ensure we prompt the user the right number of times before the game starts again
//     if (count < guessesLeft.length)    
// }
// // run inquirer to prompt the user to guess
// inquirer.prompt([
//     {

//     }
// ])

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'x') {
        process.exit();
    }
    else if (key.ctrl && key.name === 's') {
        console.log('im a new shortcut');
        // pick a new word
        pickWord();
        console.log(pickedWord.toString());
        // reset all arrays of guesses

    }
    else {
        // console.log(key.name);
        // console.log(pickedWord);
        // call the callCheck method to see if the pressed key
        // matches the Letter object
        pickedWord.callCheck(key.name);

        // for each Letter in letterArray...
        pickedWord.letterArray.map(function (letter) {
            // if each letter in letterArray is guessed...
            if (letter.guessed) {
                // invoke getSolution method to see if user
                // key is equal to any letter to guess.
                letter.getSolution();
            }
        });

        // console.log(pickedWord.word.length);

        // if key is not included in pickedWord.word..

        if (!pickedWord.word.includes(key.name)) {
            // guessesLeft goes down by one
            console.log("Wrong! Guesses left: " + guessesLeft--);

            // I push wrong guesses into wrongGuesses
            wrongGuesses.push(key.name);

            if (guessesLeft === 0) {
                // losses go up by one
                console.log("You lose! | Losses: " + losses++);

                // guessesLeft is reset to 10
                guessesLeft = 10;

                // allGuesses is redeclared as an empty array
                allGuesses = [];
                // and we pick another word
                pickWord();
                rightGuesses = [];
                // wrongGuesses is redeclared as an empty array
                wrongGuesses = [];
            }
        }

        for (let i = 0; i < pickedWord.word.length; i++) {
            if (key.name === pickedWord.word[i]) {
                rightGuesses.push(pickedWord.word[i]);
                // console.log(rightGuesses);
            }
        }

        allGuesses = rightGuesses.concat(wrongGuesses);

        // concactenate right and wrong guesses
        console.log("Letters guessed so far... " + allGuesses.join(' '));
        // console.log(rightGuesses.join(' '));

        // if the length of rightGuesses is equal to pickedWord.word...

        if (pickedWord.word.length === rightGuesses.length) {
            // wins increase by one
            wins++
            // guesses left reset to 10
            guessesLeft = 10;

            // allGuesses is redeclared as an empty array
            allGuesses = [];
            // a new word is picked
            pickWord();

            // right guesses is redeclared as an empty string
            rightGuesses = [];
            // console.log(guessesLeft);
            wrongGuesses = [];
        }

        // invoke toString to show user updated hidden word
        console.log(pickedWord.toString());
    }

});

console.log('Press any key...');