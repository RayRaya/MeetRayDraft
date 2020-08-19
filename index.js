alert("hi!");

let allCards = document.querySelectorAll(".card-text");
let wordArray = [];
let linkArr = [
  'https://rayraya.github.io/UdemyTinDog',
  'https://rayraya.github.io/DrumKit/',
  'https://rayraya.github.io/SimonGame/',
  'https://todolists-raya.herokuapp.com/',
  'https://newsletters-raya.herokuapp.com/',
  'https://blog-raya.herokuapp.com/'
];

let index = 0;
for(card of allCards){
  wordArray.push(card.innerText);
  let shortenedChar = card.innerText.substring(0, 100);
  card.innerHTML = shortenedChar +  "...<a href =" + linkArr[index] + " target = '_blank'/><br />Read more.</a>";
  index++;
}

console.log(wordArray);
