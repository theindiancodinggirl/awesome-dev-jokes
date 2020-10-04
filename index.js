var arr = require('./data/jokes.json');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

exports.getRandomJoke = function () {
    var i = randomNumber(0, arr.length - 1);
    return arr[i].joke;
};
