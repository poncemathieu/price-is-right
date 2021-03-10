const playerName = prompt("What's your name ?");
const randomNumber = Math.floor(Math.random() * 100) + 1;





let playerHasWon = false


while(!playerHasWon) {

    const playerGuess = parseInt(prompt("what's your guess ?"));


    if ( playerGuess < randomNumber) {
        alert("it's more");
    } else if ( playerGuess > randomNumber) {
       alert("it's less");
    } else if ( playerGuess === randomNumber) {
        alert(playerName + 'wins');
    playerHasWon = true;
    }
}

 
 
