// Counter for wins and losses
var wins = 0;
var losses = 0;

// The number that gets updated during the game 
var playerNumber = 0;

// The random number to be selected by the computer and displayed on the screen
var targetNumber;

// Function to start the game
function startGame() { 
    playerNumber = 0;
    $("#yournumber").text(playerNumber)
    for (var i = 19; i <= 120; i++) {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#randomnumber").text(targetNumber);
    }

//Values for each button and array for 4 numbers 
var crystalButtonValue = [];
var pinkButtonValue = "";
var blueButtonValue = "";
var whiteButtonValue = "";
var purpleButtonValue = "";

while (crystalButtonValue.length < 4) {
    var random = Math.floor(Math.random() * 19) + 1;

    if (crystalButtonValue.indexOf(random) === -1) {
        crystalButtonValue.push(random)
    } else {
        continue
    }
}
    // Set button values 
    pinkButtonValue = crystalButtonValue[0];
    blueButtonValue = crystalButtonValue[1];
    whiteButtonValue = crystalButtonValue[2];
    purpleButtonValue = crystalButtonValue[3];

    $("#pink").attr("data", pinkButtonValue);
    $("#blue").attr("data", blueButtonValue);
    $("#white").attr("data", whiteButtonValue);
    $("#purple").attr("data", purpleButtonValue);
};

startGame();

// Screen updates
$(".crystalbutton").on("click", function() {
    $(".wonlost").text("");
    var crystalValue = ($(this).attr("data"));
    crystalValue = parseInt(crystalValue);
    playerNumber += crystalValue;

    $("#yournumber").text(playerNumber);

    if (playerNumber === targetNumber) {
        wins++;
        $(".wonlost").text("Congrats! Try again!");
        $("#win").text(wins);
        startGame();
    }

    else if (playerNumber > targetNumber) {
        losses++;
        $(".wonlost").text("Oh no! Try again!");
        $("#lose").text(losses);
        startGame();
    }
});
