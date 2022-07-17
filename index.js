function rollTheDice() {
    var choose = Math.floor(Math.random() * 6);
    return choose;
}

var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var roll1 = rollTheDice();
var roll2 = rollTheDice();
document.querySelector(".first-img").src=images[roll1];
document.querySelector(".second-img").src=images[roll2];
if (roll1 === roll2){
    document.querySelector("h1").innerHTML = "Draw!"
}
else if (roll1 > roll2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}