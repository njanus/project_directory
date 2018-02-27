var deck = new cards.Deck()
var hand = new cards.Hand (5, deck)
//var shoe = new cards.Shoe(deck_count)
var dealer_hand = new cards.Hand(2, deck)

function Dealer (dealer_hand){
  this.name = "Dealer",
  this.hand = dealer_hand
}
 

function Player(name,hand) {
  this.name = name,
  this.hand = hand,
  this.turn = true,
  this.hand_total = 0
  }
  

     
  function getValue(string) {
  var value = 0
  if (string === "J" || string === "Q" || string === "K") {
    value = 10;
    }
  else if (string === "A"){
    value = 11;
    }
  else {value = parseInt(string)
    }
  return value
}

  
  function getHandtotal(hand) {
  var total = 0
  var ace_count =0
  for(var i = 0; i<hand.card_array.length; i++){
    total += getValue(hand.card_array[i].value);
    if (hand.card_array[i].value === "A"){
      ace_count++;
    }
  }
  while(ace_count>0 && total>21){
    total -=10;
    ace_count --;
  }
  return total
}

function isBust(hand) {
  if (getHandtotal(hand) > 21) {
    return true
  }
}

function getCurrentPlayer (){
  
  
}

  


  








