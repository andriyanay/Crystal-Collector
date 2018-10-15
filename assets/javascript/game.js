// List of computer choices - random number
var computerChoices = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 110, 112, 113, 114, 115, 116, 117, 118, 119, 120];

// List of numbers available for players
var playerChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Counter for wins and losses
var wins = 0;
var losses = 0;

// The number that was randomly selected for the game 
var selectedNumber;

// The number that gets updated during the game 
var playerNumber;

// Buttons to have the numbers assigned to them
var pinkButton;
var purpleButton;
var whiteButton;
var blueButton;



function beginGame() {
    // Computer selects a number 
    selectedNumber = Math.floor(Math.random() * (computerChoices.length));

    // Buttons get assigned the value
    pinkButton = Math.floor(Math.random() * (playerChoices.length));
    purpleButton = Math.floor(Math.random() * (playerChoices.length));
    whiteButton = Math.floor(Math.random() * (playerChoices.length));
    blueButton = Math.floor(Math.random() * (playerChoices.length));

    screenUpdates ();    
};

// Function that updates the screen 
function screenUpdates(){
    document.getElementById("win").textContent = wins;
    document.getElementById("lose").textContent = losses;
    document.getElementById("randomnumber").textContent = selectedNumber;
    document.getElementById("yournumber").textContent = playerNumber;
    
};
