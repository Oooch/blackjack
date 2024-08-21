let total = 0
let deck = new Deck(false);

const playedCards = new Deck(true);

function updateStatus(text) {
    document.getElementById("status").textContent= text
}

function hit() {
    if (total == 0) {
        document.getElementById("cards").textContent = "";
    }

    let card = deck.takeCard();

    total += cardValue(card, total);
    document.getElementById("sum").textContent = "";
    if (document.getElementById("cards").textContent == "") {
        document.getElementById("cards").textContent += card.value + " of " + card.suit;    
    } else {
        document.getElementById("cards").textContent += " + " + card.value + " of " + card.suit;
    }
    
    if (total > 21){
        updateStatus("Bust!")
        total = 0;
        deck = new Deck(false);
    } else if (total == 21) {
        updateStatus("You got a Blackjack!")
        total = 0;
        deck = new Deck(false);
    } else {
        updateStatus("Now at " + total);        
    }
}

function stand() {
    if (total > 21){
        updateStatus("Bust!")
    } else if (total == 21) {
        updateStatus("You got a Blackjack!")
    } else if (total < 21) {
        updateStatus("You're out of the game!")
    }

    total = 0;
    document.getElementById("cards").textContent = "";
}

document.addEventListener('DOMContentLoaded', function() {
    
});