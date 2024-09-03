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
        document.getElementById("player_card_images").innerHTML = "";
        document.getElementById("house_card_images").innerHTML = "";
        updateElement("player_sum", playerTotal)
    }

    let bet_amount = document.getElementById("bet_amount").value;

    playerTakesCard();
    
    houseTakesCard();

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

function playerTakesCard() {
    let playerCard = deck.takeCard();

    playerTotal += cardValue(playerCard, playerTotal);
    
    updateElement("player_sum","Player Total: " + playerTotal)
    addCardImage(playerCard, true);
}

function houseTakesCard() {
    let houseCard = deck.takeCard();

    houseTotal += cardValue(houseCard, houseTotal);

    updateElement("house_sum","House Total: " + houseTotal)
    addCardImage(houseCard, false);
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
}

function addCardImage(card, playerCard) {
    let suit = card.suit.toLowerCase();
    let value = card.value;
    let elementID = ""

    if (playerCard) {
        elementID = "player_card_images"
    } else {
        elementID = "house_card_images"
    }

    let img = document.createElement("img");
    img.src = "Images/Cards/" + value + "_of_" + suit + ".svg";
    img.style.margin = "5px";
    document.getElementById(elementID).appendChild(img);
}

document.addEventListener('DOMContentLoaded', function() {
    updateElement("money","£" + money);
});