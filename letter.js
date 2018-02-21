// declare a constructor function Letter
const Letter = function (character) {
    this.character = character;
    this.guessed = false;
    this.getSolution = function () {
        if (this.guessed) {
            return character;
        }
        else {
            return " _ ";
        }
    };
    this.check = function (char) {
        if (char === character) {
            this.guessed = true
            // console.log(this.guessed);
        }
        else {
            // console.log(this.guessed)
        }
    }
};

// let userGuess = new Letter("a");

// userGuess.check("b");
// userGuess.return();

module.exports = Letter;