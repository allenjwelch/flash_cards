
$('.deckSelection').on('click', '.decks', function() {
  let newDeck = $(this); 
  console.log(newDeck); 
  $('.deckActive').append(newDeck)
  newDeck.addClass('appear');
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