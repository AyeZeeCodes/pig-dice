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

var player1 = new Player ('Dan');
var player2 = new Player ('Alex');
//$('#playerSubmit').submit(function(event) {
//  event.prefentDefault;
//  var player1 = new Player($("#player1Name").val());
//  var player2 = new Player($("#player2Name").val());
//  });
//Creates an empty array to store the turn's values
var rollResult = [];

// jQuery
$(function() {
  $("#roll").click(function() {
     var roll = parseInt(rollDice());
     if(roll === 1) {
       $("button#hold, button#roll").attr("disabled", "disabled");
        //Improve Alert Message Styling
         swal("Uh Oh! You Rolled A 1", "Next Player's Turn");
         $('#nextPlayer').show();

        } else {
       rollResult.push(roll);
       $('#lastRoll').show();
       $('#rollCount').text(roll);
     }
  }); //Ends roll dice function
  $("#hold").click(function() {
    var turnScore = 0;
    // Add up the roll values to get turnScore
      rollResult.forEach(function(roll) {
        turnScore += roll;
          $("#result").show();
          $("#turnScore").text(turnScore);
          $("#p1Score").append(turnScore);
          $("button#hold, button#roll").attr("disabled", "disabled");
          $('#nextPlayer').show();

          player1.totalScore = turnScore;
      }); //Loops through each value in the array
    }); //Ends hold button function
    $('#nextPlayer').click(function() {
    location.reload();
});
}); //Ends jQuery document ready wrapper
