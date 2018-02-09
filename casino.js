//remember to wrap in module 

var CARD_VALUES = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
var CARD_SUITS = ["hearts", "diamonds", "spades", "clubs"]
var CARD_COLORS = ["red","black"]
var CARD_COLOR_KEY = {
  clubs: "black",
  spades:"black",
  hearts:"red",
  diamonds:"red"
  }
  


function shuffleIt (card_array) {
    for(var i = card_array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [card_array[i], card_array[j]] = [card_array[j], card_array[i]];
    }
    return card_array;
    }
  
function Card (suit, value, color) {
  this.value = value;
  this.color = color;
  this.suit = suit;
  this.face_up = true;
 }

function Deck () {
  this.card_array = [];
  this.makeDeck = function () {
    for(var i= 0; i<CARD_SUITS.length; i++){
      for(j=0; j<CARD_VALUES.length; j++){
        var suit = CARD_SUITS[i];
        var value = CARD_VALUES[j];
        var color = CARD_COLOR_KEY[suit];
        
        var card = new Card (suit,value,color);
        this.card_array.push(card);
      }
    }
  }
   this.makeDeck();
 
   this.shuffle = function () {
     this.card_array = shuffleIt(this.card_array);
     }
  }

function Shoe(deck_count) {
  this.deck_count = deck_count;
  this.deck_array = [];
  this.card_array = [];
  
  this.makeShoe = function () {
   for (var i=0; i < this.deck_count; i++){
    var deck = new Deck ();
    this.deck_array.push(deck);
    this.card_array = this.card_array.concat(deck.card_array);
   }
 }
  this.makeShoe();
  
  this.shuffle = function () {
    this.card_array = shuffleIt(this.card_array);
  }
  
}

function Hand(card_amount, shoe_deck_count) {
  var shoe = new Shoe(shoe_deck_count)
  this.card_amount = card_amount;
  this.card_array = [];
  this.disgard_pile = [];
  this.getHand = function () {
    for(var i=0; i<this.card_amount; i++){
      shoe.shuffle();
      this.card_array.push(shoe.card_array[i]);
    }
  };
  this.getHand();
  
  this.addCard = function () {
    this.card_amount++;
    this.card_array.push(shoe.card_array[card_amount++]);
  };
  
  this.clearHand = function () {
   this.card_array = [];
  };
  
  this.disgardHand = function () {
    for(var i = 0; i < this.card_array.length; i++) {
       this.disgard_pile.push(this.card_array[i]);
       this.card_array.splice(i, 1);
       i--; 
      this.card_amount --;
      }
  };
}

//var deck = new Deck()  //will have to call new "modulename".Deck()
//console.log(deck)

//var shoe = new Shoe(2)
//shoe.shuffle()
//console.log(shoe)

var hand = new Hand(5,2)
console.log(hand)

hand.addCard()
console.log(hand)
hand.addCard()
console.log(hand)

hand.disgardHand()
console.log(hand)

hand.addCard()
console.log(hand)
hand.addCard()
console.log(hand)











