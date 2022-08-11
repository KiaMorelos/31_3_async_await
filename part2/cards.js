const cardsApiUrl = "http://deckofcardsapi.com/api/deck/"
const $container = $(`#container`)
$drawBtn = $(`#draw`)

//1
let deck
async function draw(){
    const res =  await $.getJSON(`${cardsApiUrl}new/draw`)
        const {value, suit } = res.cards[0]
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
}

draw()

//2
async function twoCards(){
    const res = await $.getJSON(`${cardsApiUrl}new/draw`)
    const deckId = res.deck_id

    const {cards: cardOne} = res 
    const {cards: cardTwo} = await $.getJSON(`${cardsApiUrl}${deckId}/draw`)
   
    const cardArr = [cardOne, cardTwo]
    
    for(let card of cardArr){
        console.log(`${card[0].value.toLowerCase()} of ${card[0].suit.toLowerCase()}`);
    }
}

twoCards()


//3

async function getDeck(){
    const res = await $.getJSON(`${cardsApiUrl}new/shuffle`)
    const deckId = res.deck_id

    $container.attr("data-id", deckId)
}


async function drawCard(){
    $container.empty()
    const deckId = $container.attr('data-id')
    const res = await $.getJSON(`${cardsApiUrl}/${deckId}/draw`)

    const {image} = res.cards[0]

    $container.append(`<img src="${image}">`)
    $container.append(`<p>CARDS LEFT: ${res.remaining}</p>`)
         if(res.remaining === 0){
             $drawBtn.remove()
             $container.prepend(`<p>NO MORE CARDS</p>`)
         }
}

getDeck()
$drawBtn.on('click', drawCard)
