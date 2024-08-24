let total = 0;
let deck = new Deck(false);
let money = 0.0;
const playedCards = new Deck(true);

function updateElement(id, text) {
    document.getElementById(id).textContent = text;
}

function clearElement(id) {
    document.getElementById(id).textContent = "";
}

function hit() {
    if (total == 0) {
        clearElement("cards");
        document.getElementById("card_images").innerHTML = "";
    }

    let card = deck.takeCard();

    total += cardValue(card, total);
    clearElement("sum");

    let cardsElement = document.getElementById("cards");

    if (cardsElement.textContent == "") {
        cardsElement.textContent = card.value + " of " + card.suit;    
    } else {
        cardsElement.textContent += " + " + card.value + " of " + card.suit;
    }
    
    addCardImage(card);

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

function addCardImage(card) {
    let suit = card.suit.toLowerCase();
    let value = "";

    switch(card.value) {
        case "J":
            value = "jack";
            break;
        case "Q":
            value = "queen";
            break;
        case "K":
            value = "king";
            break;
        case "A":
            value = "ace";
            break;
        default: // so it's a number
            value = card.value;
            break;
    }

    let img = document.createElement("img");
    img.src = "Images/Cards/" + value + "_of_" + suit + ".svg";
    img.style.margin = "5px";
    document.getElementById("card_images").appendChild(img);
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