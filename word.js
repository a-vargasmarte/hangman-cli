// we require letter.js
let Letter = require("./letter.js");

// console.log(letterObject)

// we declare a constructor function Word
const Word = function (word) {
    // we create an array of letters by using
    // .split("")
    // then we use .map to create new Letter objects
    this.letterArray = word.split("").map(letter => new Letter(letter));
    // we create a method that returns a string representing the word to guess
    this.toString = function () {
        return this.letterArray.map(function (letter) { // iterate over each letter
            return letter.getSolution(); // return the solution for each to form an array of solved letters
        }).join(''); // create a string from the array of solved letters
    }
    // we create a method that calls the check function for each letter
    this.callCheck = function (character) {
        return this.letterArray.forEach(letter => {
            letter.check(character);
        });
    }
};

// let gameWord = new Word("dog");
// console.log(gameWord.toString());
// gameWord.callCheck("o");

module.exports = Word;