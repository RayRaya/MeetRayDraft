let words = $(".card-text p").text();
let shortenedChar = words.substring(0, 100);

$(".card-text p").innerHTML = shortenedChar + "..." ;
