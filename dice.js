

function rollDice(){

var randomnumber1 =   Math.floor((Math.random()*6)+1);

var randomdicenumber = "dice" + randomnumber1 + ".png";

var randomedicesource = "images/" + randomdicenumber;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomedicesource);

var randomnumber2 =   Math.floor((Math.random()*6)+1);

var randomdicenumber1 = "dice" + randomnumber2 + ".png";

var randomedicesource1 = "images/" + randomdicenumber1;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomedicesource1);

if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins 🚩"
} else if (randomnumber1===randomnumber2) {
  document.querySelector("h1").innerHTML="Draw!!"
} else{
  document.querySelector("h1").innerHTML="🚩Player 2 Wins"
}
}
