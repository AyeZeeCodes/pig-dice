#Pig Dice Game
##A simple game where users roll dice to rack up a score. Don't roll a 1.

###Spec no.1
Behavior: A user rolls a dice and get's a 1.
Input: When it receives a 1
Output: Score is 0 for that roll.

###Spec no.2
Behavior: A user rolls a 2-5 and decides to hold.
Input: When it receives a 2-5.
Output: The user's score for that roll is what they rolled (n=(2-5)).

###Spec no.3
Behavior: A user rolls a 2-5 and decides to continue their turn.
Input: When the program receives a 2-5 the score.
Output: The roll is added to the score of the current turn.

###Spec no.4

Behavior: On a roll that isn't 1, user can decide to roll or continue.
Input: User decides to roll again OR the turn is over.
Output: Another turn is had, or a new user rolls.
