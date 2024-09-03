class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor(emptyDeck) {
        this.cards = [];
        this.suits = ["Clubs","Spades","Hearts","Diamonds"];
        this.values = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
        
        if (emptyDeck == false) {
            this.addCards();
            this.shuffleCards();
        }
    }
    
    shuffleCards() {
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    } 
    
    takeCard() {
        return this.cards.pop();
    }

    addCards() {
        for (let suit of this.suits) {
            for (let value of this.values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }
}

function cardValue(card, total) {
    if (isNaN(card.value)) {
        if (card.value == "jack" ||
            card.value == "queen" ||
            card.value == "king"){
                return 10;
        } else if (card.value == "ace"){
            if (total > 10) {
                return 1;
            } else {
                return 11;
            }
        }
    }

    return parseInt(card.value);
}