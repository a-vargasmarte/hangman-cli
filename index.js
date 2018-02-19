// this script depends on words.js
let Word = require('./word.js');

// we have a bunch of words in a wordBank array
let wordBank = ['grenadine', 'pomegranate', 'hefty', 'gladiolus', 'pelter',
    'concretize', 'manikin', 'canvass', 'lubberly', 'cordial', 'jocular',
    'Utopian', 'tamp', 'subnormality', 'obbligato', 'woodsy', 'ha-ha',
    'stevedore', 'effervescence', 'bromidic', 'canoodle', 'satrap',
    'congeries', 'twain', 'kittiwake', 'polysemy', 'madrigal', 'bollard',
    'parvenu', 'bowdlerize', 'mountebank', 'hauteur', 'asphodel',
    'annulment', 'quasi', 'Yugoslavia', 'paleobotany', 'cephalopodan'];

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