//Randomly gives us a number from 1-6
function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
};

//Creating the player constructor
function Player(name, totalScore) {
  this.name = name;
  this.totalScore = 0;
};

//Defining player objects
var player1 = new Player("dan");
var player2 = new Player("alex");

//Creates an empty array to store the turn's values
var rollResult = [];

// jQuery
$(function() {
  $("#roll").click(function() {
     var roll = parseInt(rollDice());
     if(roll === 1) {
       alert('Your turn is over');
     } else {
       rollResult.push(roll);
     }
     console.log(rollResult);
     $("#hold").click(function() {
       var turnScore = 0;
        // Add up the roll values to get turnScore
         rollResult.forEach(function(roll) {
           turnScore += roll;
           $("#turnScore").text(turnScore);
          player1.totalScore = turnScore;
         });

      });
      if (Player.totalScore >= 100) {
        alert('You WIN!!!');
      }

    // for (i = 0; i < 4; i++) {
    //   turnScore = 0;
    //   roll = rollDice();
    //   console.log(roll);
    //   turnScore += roll;
    //   console.log(turnScore);
    // };




    // if(roll === 1) {
    //   alert('Your Turn Over');
    //   turnScore = 0;
    //   return;
    // } else {
    //   rollDb.push(roll);
    //   console.log(roll);
    //
    //   console.log(turnScore);


    //if roll = 1 --> leave the loop
    //if user clicks hold --> leave the program and report the turn's score
    //if the user clicks roll dice button --> loop through program again
  });


});
