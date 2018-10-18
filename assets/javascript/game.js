// Counter for wins and losses
var wins = 0;
var losses = 0;

// The number that gets updated during the game 
var playerNumber = 0;

// Buttons to have the numbers assigned to them
var pinkButton = $("#pink"); 
var purpleButton = $("#purple");
var whiteButton = $("#white");
var blueButton = $("#blue");

// Reset button
   var targetNumber = "";

    for (var j = 19; j <= 120; j++) {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }

    $("#reset").click (function() {
        $("#randomnumber").text( targetNumber);
   console.log(targetNumber)
   });

// Blue button
 //  var blueButtonValue = "";

 //   for (var i = 1; i <= 12; i++) {
 //   blueButtonValue = Math.floor(Math.random() * (12)) + 1;
 //   };

 //   $(blueButton).click (function() {
 //    $("#yournumber").text(blueButtonValue)
 //   });

// Pink button
 //   var pinkButtonValue = "";

 //   for (var i = 1; i <= 12; i++) {
 //       pinkButtonValue = Math.floor(Math.random() * (12)) + 1;
 //   };

 //   $(pinkButton).click (function() {
 //    $("#yournumber").text(pinkButtonValue)
 //   });

// Purple button
//    var purpleButtonValue = "";

 //   for (var i = 1; i <= 12; i++) {
 //   purpleButtonValue = Math.floor(Math.random() * (12)) + 1;
 //   };

 //   $(purpleButton).click (function() {
 //   $("#yournumber").text(purpleButtonValue)
 //   });

// White button
  //  var whiteButtonValue = "";

//  for (var i = 1; i <= 12; i++) {
 //  whiteButtonValue = Math.floor(Math.random() * (12)) + 1;
 //  };

 //   $(whiteButton).click (function()   {
 //  $("#yournumber").text( whiteButtonValue)
 //   });


    $(".crystalbutton").click(function() {
        var userButtons = [];    
            for(var l = 1; l <= 12; l++) {
               do {
              var  randomNumber = Math.floor(Math.random() * 12) + 1;  
               } while (userButtons[randomNumber]);
               userButtons[randomNumber] = true;
               $("#yournumber").text(randomNumber)
            };
        });

            
        var numberOprtions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,]
        $(".crystalbutton").attr("data-crystalvalue", numberOptions[i]);

        $(".crystalbutton").click(function() {
            $("#yournumber").text(randomNumber)
        }



  //  function getRandomQuestionNumbers() {
  //      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //      for (var i = 1; i <= 12; i++) {
  //        numbers.push(i);
  //      }
  //      shuffle(numbers);
  //      return numbers.slice(0, 11);

  //    };
  //    getRandomQuestionNumbers (); });

  //   $("#yournumber").text(numbers)



















  //  function beginGame() {
        // Computer selects a number 
    //   selectedNumber = Math.floor(Math.random() * (computerChoices.length));
      
        // Buttons get assigned the value
    //    pinkButton = Math.floor(Math.random() * (playerChoices.length));
    //    purpleButton = Math.floor(Math.random() * (playerChoices.length));
    //    whiteButton = Math.floor(Math.random() * (playerChoices.length));
     //   blueButton = Math.floor(Math.random() * (playerChoices.length));
    
   //     screenUpdates ();    
   // };
    
    // Function that updates the screen 
   // function screenUpdates(){
    //    document.getElementById("win").textContent = wins;
    //    document.getElementById("lose").textContent = losses;
    //    document.getElementById("randomnumber").textContent = selectedNumber;
    //    document.getElementById("yournumber").textContent = playerNumber;
        
    // };
    
    // $("#number-to-guess").text(targetNumber);
    
    
    // Button functions
    //$(pinkButton).click (function() {
    //alert( Math.floor(Math.random() * (playerChoices.length)) );
    //});
    
    //$(purpleButton).click (function() {
     //   alert( "purple" );
       // });
    
    

    // var blueButtonValue = ($(this).attr("data-crystalvalue"));
    // blueButtonValue = parseInt(blueButtonValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
        //    playerNumber += blueButtonValue;
    //    $("#yournumber").text(blueButtonValue)
       //    console.log(blueButtonValue);


     //   });

      //  pinkButton.attr("data-crystalvalue", playerChoices = Math.floor(Math.random() * (playerChoices.length)));


     //   $(pinkButton).click (function() {

     //       var pinkButtonValue = ($(this).attr("data-crystalvalue"));
     //       pinkButtonValue = parseInt(pinkButtonValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
     //       playerNumber += pinkButtonValue;
        
            // All of the same game win-lose logic applies. So the rest remains unchanged.
     //       alert("New score: " + playerNumber);
        
     //       if (playerNumber === selectedNumber) {
     //         alert("You win!");
     //       }
        
    //        else if (playerNumber >= selectedNumber) {
     //         alert("You lose!!");
     //       }
        
     //     });
        
    //      purpleButton.attr("data-crystalvalue", playerChoices = Math.floor(Math.random() * (playerChoices.length)));


      //    $(purpleButton).click (function() {

     //       var purpleButtonValue = ($(this).attr("data-crystalvalue"));
      //      purpleButtonValue = parseInt(purpleButtonValue);
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
      //      playerNumber += purpleButtonValue;
        
            // All of the same game win-lose logic applies. So the rest remains unchanged.
      //    alert("New score: " + playerNumber);
        
      //      if (playerNumber === selectedNumber) {
      //        alert("You win!");
      //      }
        
       //     else if (playerNumber >= selectedNumber) {
       //       alert("You lose!!");
       //     }
        
       //   });