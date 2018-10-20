// Counter for wins and losses
var wins = 0;
var losses = 0;

// The number that gets updated during the game 
var playerNumber = 0;

// The random number to be selected by the computer and displayed on the screen
var targetNumber = "";

    for (var i = 19; i <= 120; i++) {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#randomnumber").text(targetNumber);
    }

// Values for each button and array for 4 numbers 

// var crystals = [$("#pink"), $("#blue"), $("#purple"), $("#white"),];

// function resetCrystals () {
//    for (var i = 0; i < crystals.length; i++) {
//        var crystal = $(".crystalbutton");
    
//        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
//        console.log(crystal);
//    }
// }
// resetCrystals();

//Values for each button and array for 4 numbers 

var crystalButtonValue = [];
var blueButtonValue = "";
var pinkButtonValue = "";
var purpleButtonValue = "";
var whiteButtonValue = "";


var scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   
function assignNumber() {
  scores.sort(function(a, b){return 0.5 - Math.random()});
}
assignNumber();

//Create an array wuth 4 numbers to be selected by crystal buttons 
var crystalButtonValue = [];
  for (var i = 0; i < 4; i++) {
     crystalButtonValue.push(scores[i]);
  console.log(scores[i]);
 
// One way - assigns the same number to each button
 $(".crystalbutton").attr("data-crystalvalue", crystalButtonValue[i]);
 };

 // Another attempt. Here I get a mistake NAN
 // pinkButtonValue = crystalButtonValue [0];
 // blueButtonValue = crystalButtonValue [1];
 // whiteButtonValue = crystalButtonValue [2];
 // purpleButtonValue = crystalButtonValue [3];

// $("#pink").attr("data", pinkButtonValue);
// console.log(pinkButtonValue);
// $("#purple").attr("data", purpleButtonValue);
// console.log(purpleButtonValue);
// $(blueButton).attr("data", blueButtonValue);
// console.log(blueButtonValue);
// $(whiteButton).attr("data", whiteButtonValue);
// console.log(whiteButtonValue);

$(".crystalbutton").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

   playerNumber += crystalValue;

    $("#yournumber").text(playerNumber);

    if (playerNumber === targetNumber) {
        wins++;
        alert("you win!");
        $("#win").text(wins);
    }

    else if (playerNumber > targetNumber) {
        losses++;
        alert("you lose");
        $("#lose").text(losses);
    }


});


