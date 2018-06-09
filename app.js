
$('.deckSelection').on('click', '.decks', function() {
  let newDeck = $(this); 
  let cardContainer = newDeck[0].childNodes[1]; 
  console.log(newDeck); 
  console.log(newDeck[0].childNodes[1]); 
  $('.deckActive').append(newDeck)
  newDeck.addClass('appear'); 
  cardContainer.addClass('flip-active');
})

$('.deckActive').on('click', '.decks', function() {
  let oldDeck = $(this); 
  console.log(oldDeck); 
  $('.deckSelection').append(oldDeck)
  oldDeck.addClass('appear');
})




// https://css-tricks.com/almanac/properties/a/animation/
// https://css-tricks.com/controlling-css-animations-transitions-javascript/
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle