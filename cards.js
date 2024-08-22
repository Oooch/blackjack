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
        this.values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        
        if (emptyDeck == false) {
            for (let suit of this.suits) {
                for (let value of this.values) {
                    this.cards.push(new Card(suit, value));
                }
            }
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
}

function cardValue(card, total) {
    if (isNaN(card.value)) {
        if (card.value == "J" ||
            card.value == "Q" ||
            card.value == "K"){
                return 10;
        } else if (card.value == "A"){
            if (total > 10) {
                return 1;
            } else {
                return 11;
            }
        }
    }

    return parseInt(card.value);
}