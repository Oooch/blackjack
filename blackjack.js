let playerTotal = 0;
let houseTotal = 0;
let deck = new Deck(false);
let money = 100.0;

function updateElement(id, text) {
    document.getElementById(id).textContent = text;
}

function clearElement(id) {
    document.getElementById(id).textContent = "";
}

function hit() {
    if (playerTotal == 0) {
        clearElement("cards");
        document.getElementById("player_card_images").innerHTML = "";
    }

    let bet_amount = document.getElementById("bet_amount").value;

    let card = deck.takeCard();

    playerTotal += cardValue(card, playerTotal);
    clearElement("sum");

    let cardsElement = document.getElementById("cards");

    if (cardsElement.textContent == "") {
        cardsElement.textContent = card.value + " of " + card.suit;    
    } else {
        cardsElement.textContent += " + " + card.value + " of " + card.suit;
    }
    
    addCardImage(card, true);
    addCardImage(card, false);

    if (playerTotal > 21){
        updateElement("status","Bust!");
        playerTotal = 0;
        deck = new Deck(false);
    } else if (playerTotal == 21) {
        updateElement("status","You got a Blackjack!");
        playerTotal = 0;
        deck = new Deck(false);
    } else {
        updateElement("status","Now at " + playerTotal);        
    }
}

function addCardImage(card, playerCard) {
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

    let elementID = ""

    if (playerCard) {
        elementID = "player_card_images"
    } else {
        elementID = "house_card_images"
    }

    let img = document.createElement("img");
    img.src = "Images/Cards/" + value + "_of_" + suit + ".svg";
    img.style.margin = "5px";
    document.getElementById("player_card_images").appendChild(img);
}

function stand() {
    if (playerTotal > 21){
        updateElement("status","Bust!");
    } else if (playerTotal == 21) {
        updateElement("status","You got a Blackjack!");
    } else if (playerTotal < 21) {
        updateElement("status","You're out of the game!");
    }

    playerTotal = 0;
    clearElement("cards");
}

document.addEventListener('DOMContentLoaded', function() {
    updateElement("money","£" + money);
});