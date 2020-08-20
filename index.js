let allCards = document.querySelectorAll(".card-text");
let wordArray = [];
let linkArr = [
  'https://rayraya.github.io/UdemyTinDog',
  'https://rayraya.github.io/DrumKit/',
  'https://rayraya.github.io/SimonGame/',
  'https://todolists-raya.herokuapp.com/',
  'https://newsletters-raya.herokuapp.com/',
  'https://blog-raya.herokuapp.com/',
  'https://85bt8.csb.app/',
  'https://tywxd.csb.app/'
];

let index = 0;
for(card of allCards){
  wordArray.push(card.innerText);
  let text = card.innerText;
  let shortenedChar = "";
  text.length <= 100? shortenedChar = text: shortenedChar = text.substring(0, 90) + "...";
  card.innerHTML = shortenedChar +
    "<br /><div class = 'row'> <a onclick = 'clickReadMore(" + this.value + ")' value = '1' class = 'col-8' href = '#' />Read more <span style = 'font-size: 11px;'>&#9660;</span></a> <a class = 'col-4' href = "  + linkArr[index] +  " target = '_blank'>Link</a></div>";
  index++;
}

function clickReadMore(index){
  alert('its been called');
  alert(index);
}
