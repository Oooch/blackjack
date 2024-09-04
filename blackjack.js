let playerTotal = 0;
let houseTotal = 0;
let deck = new Deck(false);
let money = 0.0;
let bet_amount = 0;

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
        updateElement("player_sum", playerTotal);
        updateElement("house_sum", houseTotal);
        bet_amount = parseFloat(document.getElementById("bet_amount").value);

        reduceMoney(bet_amount);
    }


    playerTakesCard();
    
    if (houseTotal < playerTotal) {
        houseTakesCard();
    } else if (houseTotal < 16) {
        houseTakesCard();
    } else if (houseTotal > 16 && houseTotal < playerTotal) {
        houseTakesCard();
    }

    if (playerTotal > 21 && houseTotal > 21) {
        reset("Bust!");
    } else if (playerTotal == 21 && houseTotal == 21) {
        reset("Draw!");
    } else if (playerTotal > 21){
        reset("Bust!");
    } else if (playerTotal == 21) {
        reset("You got a Blackjack!");

        increaseMoney(bet_amount * 3);        
    } else if (houseTotal > 21) {
        reset("You win!");

        increaseMoney(bet_amount);  
    } else {
        updateElement("player_status","Now at " + playerTotal);        
    }
}

function reset(status) {
    updateElement("player_status", status);
    playerTotal = 0;
    houseTotal = 0;
    deck = new Deck(false);
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
        updateElement("player_status","Bust!");
    } else if (playerTotal == 21) {
        updateElement("player_status","You got a Blackjack!");
    } else if (playerTotal < 21) {
        updateElement("player_status","You're out of the game!");
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
    img.style.height = "200px";
    document.getElementById(elementID).appendChild(img);
}

function increaseMoney(byValue) {
    money += byValue;
    updateElement("money", "£" + money)
}

function reduceMoney(byValue) {
    money -= byValue;
    updateElement("money", "£" + money)
}

document.addEventListener('DOMContentLoaded', function() {
    increaseMoney(100);
});