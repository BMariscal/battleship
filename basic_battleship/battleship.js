

var location1;
var location2;
var location3;
var currentGuess;
var hits = 0;
var guesses = 0;
var isSunk = false;

var my_array= [];
var a;
var counted =0;

for (var i= 1; i < 20; i++){
    a = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    if(a in my_array) {
    }
    else{
        if(my_array.indexOf(a) === -1){
            my_array.push(a);
            counted = counted + 1;
            if (counted == 3){
                break;
            }
        }
    }
};
location1 = my_array[0];
location2 = my_array[1];
location3 = my_array[2];


var guessesArray=[];
while (!isSunk) {
    currentGuess = prompt("Ready, aim, fire! (enter a number from 1-7)");
    // document.write(currentGuess);
    // document.write(typeof currentGuess);
    if (currentGuess >= 1 && currentGuess <= 7) {
            currentGuess = parseInt(currentGuess);
            if (guessesArray.includes(currentGuess)){
                alert("You've already guessed location " + currentGuess + ". Please try a different location.");
            }else{
            if ((currentGuess) === location1 || (currentGuess) === location2 || (currentGuess) === location3) {
                guessesArray.push(currentGuess);
                alert("HIT! Ship at location " + currentGuess + " was sunk! Your correct guesses so far : Ships @ positions " + guessesArray);
                hits = hits + 1;
                guesses = guesses + 1;

                if (hits === 3) {
                    alert("YOU'VE WON! You sank all the battleships with " + hits + " guesses");
                    isSunk = true;
                }
            } else {
                guesses = guesses + 1;
                alert("MISS! You've guessed " + guesses + " times so far");
            }}


        } else if (!currentGuess) { /*!currentGuess checks for falsy; if null,0, undefined, NaN*/

            alert("End of game, thanks for playing!");
            break;

        } else if (currentGuess < 1 || currentGuess > 7) {
            guessesArray.push(currentGuess);
            alert("Wrong guess, number out of range, try again");


        } else if (typeof currentGuess === 'string') {
            alert("Please enter a digit between 1-7, you entered a letter");

        }

};


document.write("The ships were located in positions: " + location1 + ", " + location2 + ", " + location3)






