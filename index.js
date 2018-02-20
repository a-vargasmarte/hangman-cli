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
    console.log(pickedWord);
    // then we use the Word constructor to store it
    pickedWord = new Word(pickedWord);
}

pickWord();
console.log(pickedWord.toString());

// we declare a variable to count how many times the user is prompted to guess
let count = 0;
// array in which we will store each user guess
let guessArray = [];

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
    else {
        console.log(key.name);
        pickedWord.callCheck(key.name);
        console.log(pickedWord.word.includes(key.name));
        // pickedWord.letterArray.map(function (letter) {
        // if (key.name === letter.character) {
        //     console.log('yay');
        //     guessArray.push(key.name);
        //     // letter.character = key.name;
        // }

        // else {
        //     console.log('wrong choice!');
        //     guessesLeft--;
        //     console.log(guessesLeft);

        //     if (guessesLeft === 0) {
        //         console.log('You lose, loser!');
        //         guessesLeft = 10;
        //         losses++;
        //         pickWord();
        //     }
        // }
        // console.log(pickedWord.word);
        // console.log(pickedWord.letterArray.includes(letter.character));
        // });
        console.log(guessArray);
    }
});

// console.log(pickedWord.letterArray);



console.log('Press any key...');