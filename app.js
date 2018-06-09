let cardInfo = {
  style: 'style', 
  abv: 5.5, 
  char: 'Sample'
}; 




$('.deckSelection').on('click', '.decks', function() {
  let newDeck = $(this); 
  let cardContainer = newDeck[0].childNodes[1]; 
  console.log(newDeck); 
  console.log(newDeck[0].childNodes[1]); 
  addCard(cardInfo); 
  // $('.deckActive').append(newDeck)
  // newDeck.addClass('appear'); 
})

$('.deckActive').on('click', '.decks', function() {
  let oldDeck = $(this); 
  console.log(oldDeck); 
  $('.deckSelection').append(oldDeck)
  oldDeck.addClass('appear');
})

function addCard(cardInfo) {
  let container = `<div class="card-container appear">`; 
  let card = `<div class="card" id="d1c1">`; 
  let front = `<div class="front">`; 
    let frontInfo = `<h3 id="${cardInfo.style}">${cardInfo.style}</h3>`;
  let back = `<div class="back">`;
    let backInfo = `<p>ABV: ${cardInfo.abv}\n Characteristics: ${cardInfo.char}`; 
    let links = `<a href="#">Nailed it!</a>`; 
  $(front).append(frontInfo); 
  $(back).append(backInfo, links); 
  $(card).append(front, back); 
  console.log(card); 
  $(container).append(card);
  console.log(container); 
  $('.deckActive').append(container); 
}


// https://css-tricks.com/almanac/properties/a/animation/
// https://css-tricks.com/controlling-css-animations-transitions-javascript/
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle