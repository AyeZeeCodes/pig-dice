//Randomly gives us a number from 1-6
function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
};

//Creating the player constructor
function Player(name, turnScore, totalScore) {
  this.name = name;
  this.turnScore = [];
  this.totalScore = 0;
};

//Defining player objects
var players = [];
$('#playerSubmit').click(function(event) {
  event.preventDefault();
  console.log($("#player1Name").val());
  players[0] = new Player($("#player1Name").val());
  players[1] = new Player($("input#player2Name").val());
  });

var player = 0;

function EndTurn() {
  players[player].turnScore = [];
  player = (player + 1) % 2;
};
function outputPlayerScore(score) {
  $('#player' + player).html('<p>' + score + '</p>');
};

// jQuery front end logic.
$(function() {
  $("#roll").click(function() {
    console.log(players[player]);
     var roll = parseInt(rollDice());
     if (roll === 1) {
       swal("Uh Oh! You Rolled A 1", "Next Player's Turn");
       EndTurn();
      }
      else {
        players[player].turnScore.push(roll);
        $('#lastRoll').show();
        $('#rollCount').text(roll);
      }
  }); //Ends roll dice function

  $("#hold").click(function() {
    var score = 0;

    // Add up the roll values to get turnScore
    players[player].turnScore.forEach(function(roll) {
      score += roll;
      $("#turnResult").show();
    }); //Loops through each value in the array

    $("#score").text(score);
    players[player].totalScore += score; // += score ??
    outputPlayerScore(players[player].totalScore);
    EndTurn();
  }); //Ends hold button function
}); //Ends jQuery document ready wrapper
