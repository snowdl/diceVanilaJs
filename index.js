//dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImage = 'dice' + randomNumber1 + '.png';
// var randomImageSource = 'img/' + randomDiceImage;

var randomImageSource = `img/dice${randomNumber1}.png`;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = `img/dice${randomNumber2}.png`;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 win!';
} else if (randomNumber1 < randomNumber) {
  document.querySelector('h1').innerHTML = 'Player 2 win!';
} else {
  document.querySelector('h1').innerHTML = 'Draw';
}
