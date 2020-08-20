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

function makeUnit(){
  let index = 0;
  for(card of allCards){
    wordArray.push(card.innerText);
    let text = card.innerText;
    let shortenedChar = "";
    text.length <= 100? shortenedChar = text: shortenedChar = text.substring(0, 90) + "...";
    card.innerHTML = shortenedChar + "<br /><div class = 'row center'> <a id = " + index + " class = 'card-options col-7' onclick = 'clickRead()'/>Read more <span style = 'font-size: 11px;'>&#9660;</span></a> <a class = 'col-5' href = "  + linkArr[index] +  " target = '_blank'>Link</a></div>";
    index++;
  }
}


function clickRead(){
  let index = parseInt(event.srcElement.id);
  let fullText = wordArray[index];
  allCards[index].innerText = fullText;
  let htmlVal = allCards[index].innerHTML;
  allCards[index].innerHTML = htmlVal +
  "<br /><div class = 'row center'> <a id = " + index + " class = 'card-options col-7' onclick = 'clickCollapse()'/>Collapse <span style = 'font-size: 11px;'>&#9650;</span></a> <a class = 'col-5' href = "  + linkArr[index] +  " target = '_blank'>Link</a></div>";
}

function clickCollapse(){
  let index = parseInt(event.srcElement.id);
  let text = wordArray[index];
  let  shortenedChar = '';
  text.length <= 100? shortenedChar = text: shortenedChar = text.substring(0, 90) + "...";
  let htmlVal = allCards[index].innerHTML;
  allCards[index].innerHTML = shortenedChar+ "<br /><div class = 'row center'> <a id = " + index + " class = 'card-options col-7' onclick = 'clickRead()'/> Read more <span style = 'font-size: 11px;'> &#9660; </span></a> <a class = 'col-5' href = "  + linkArr[index] +  " target = '_blank'>Link</a></div>";
}

makeUnit();
