let total = 0;
let deck = new Deck(false);
let money = 0.0;
const playedCards = new Deck(true);

function updateElement(id, text) {
    document.getElementById(id).textContent = text;
}

function clearElement(id) {
    document.getElementById(id).textContent = ""
}

function hit() {
    if (total == 0) {
        clearElement("cards");
    }

    let card = deck.takeCard();

    total += cardValue(card, total);
    clearElement("sum");

    let cardsElement = document.getElementById("cards")

    if (cardsElement.textContent == "") {
        cardsElement.textContent += card.value + " of " + card.suit;    
    } else {
        cardsElement.textContent += " + " + card.value + " of " + card.suit;
    }
    
    if (total > 21){
        updateElement("status","Bust!");
        total = 0;
        deck = new Deck(false);
    } else if (total == 21) {
        updateElement("status","You got a Blackjack!");
        total = 0;
        deck = new Deck(false);
    } else {
        updateElement("status","Now at " + total);        
    }
}

function stand() {
    if (total > 21){
        updateElement("status","Bust!");
    } else if (total == 21) {
        updateElement("status","You got a Blackjack!");
    } else if (total < 21) {
        updateElement("status","You're out of the game!");
    }

    total = 0;
    clearElement("cards");
}

document.addEventListener('DOMContentLoaded', function() {
    
});