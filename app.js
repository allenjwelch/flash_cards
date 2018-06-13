// TODO: create array of card objects for sample data

let deckInfo = [
  {
    style: 'style1', 
    abv: 5.5, 
    char: 'Sample'
  }, {
    style: 'style2', 
    abv: 5.5, 
    char: 'Sample'
  }, {
    style: 'style3', 
    abv: 5.5, 
    char: 'Sample'
  },
]; 

let cardPos = 0; 




$('.deckSelection').on('click', '.decks', function() {
  let newDeck = $(this); 
  let cardContainer = newDeck[0].childNodes[1]; 
  // console.log(newDeck[0].childNodes[1]); 
  activeCards(deckInfo); 
  // $('.deckActive').append(newDeck)
  newDeck.addClass('disappear'); 
})

$('.deckActive').on('click', '.decks', function() {
  let oldDeck = $(this); 
  $('.deckSelection').append(oldDeck)
  oldDeck.addClass('appear');
})

// TODO: have sample data load cards to be added to active div after click from deckSelection

function activeCards(deckInfo) {
  let cardArr = [];
  cardPos = 0; 
  $('.deckActive').empty(); 
  deckInfo.forEach((cardInfo) => {
    let container = $(`<div class="card-container appear" id="d1c1">`); 
    let card = $(`<div class="card">`); 
    let front = $(`<div class="front">`); 
      let frontInfo = $(`<h3 id="${cardInfo.style}">Style: ${cardInfo.style}</h3>`);
    let back = $(`<div class="back">`);
      let backInfo = $(`<p>ABV: ${cardInfo.abv}\n Characteristics: ${cardInfo.char}</p>`); 
      let links = 
      $(`<a class="cardBtns" id="nailed" href="#">Nailed it!</a>
        <a class="cardBtns" id="kinda" href="#">Kinda</a>
        <a class="cardBtns" id="notAtAll" href="#">Not at all</a>`); 
    front.append(frontInfo); 
    back.append(backInfo, links); 
    card.append(front, back); 
    container.append(card);
    // $('.deckActive').append(container); 

    // push cards into an array ====
    cardArr.push(container); 
  })

  console.log(cardArr); 
  $('.deckActive').html(cardArr[cardPos]); 

  // event listener for moving through cards in active deck ==
  $('.deckActive').on('click', '.cardBtns', function() {
    
    // TODO: check for a specific btn and move current cards position based on button selected. 
    console.log(cardPos)
    console.log(this.id); 
    cardCount = countInArray(cardArr, cardArr[cardPos]); 

    if (this.id === 'nailed') {
      if (cardCount > 1) {
        cardArr.shift(); 
      }
    } else if (this.id === 'notAtAll') {
      // adds the same card back into the deck towards the end
      cardArr.splice(Math.floor(cardArr.length / 2), 0, cardArr[cardPos])
    }

    // switch (this.id) {
    //   case 'nailed':
    //     if (cardCount > 1) {
    //       cardArr.shift(); 
    //     }
    //     break; 
    //   case 'notAtAll':
    //     cardArr.splice(cardArr.length-1, 0, cardArr[cardPos])
    //     break; 
    //   default:
    //     break; 
    // }

    countInArray(cardArr, cardArr[cardPos]); 

    // move user to next card in deck ====
    cardPos++; 
    if (cardPos > (cardArr.length - 1)) {
      cardPos = 0
    }
    $('.card-container').addClass('disappear');
    setTimeout(function() {
      $('.card-container').removeClass('disappear');
      $('.deckActive').html(cardArr[cardPos]); 
    }, 750);
  }); 
  
}

// function to count cards in array
function countInArray(array, what) {
  let count = 0;
  array.forEach( (elem) => {
    if (elem === what) {
      count++; 
    }
  }); 
  // console.log('count: ' + count);
  return count; 
}






// https://css-tricks.com/almanac/properties/a/animation/
// https://css-tricks.com/controlling-css-animations-transitions-javascript/
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle