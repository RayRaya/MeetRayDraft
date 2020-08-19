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
  let text = card.innerText;
  let shortenedChar = "";
  text.length <= 100? shortenedChar = text: shortenedChar = text.substring(0, 90) + "...";
  card.innerHTML = shortenedChar +
    "<br /><div class = 'row'> <a class = 'col-8' href = '#' target = '_blank'/>Read more.</a> <a class = 'col-4' href = "  + linkArr[index] +  " target = '_blank'>Link</a></div>";
  index++;
}
