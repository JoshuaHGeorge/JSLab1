let userMove = window.prompt("Input ROCK(R), PAPER(P) or SCISSORS(S)");

let computerMove = Math.random();

if(computerMove >= 0 && computerMove < 0.34 ){
    computerMove = 'R';
}
else if(computerMove >= 0.34 && computerMove < 0.66 ){

    computerMove = 'P';
}
else if(computerMove >= 0.66 && computerMove <= 1 ){

    computerMove = 'S';
}

if((computerMove=='R'&&userMove=='R') || (computerMove=='P'&&userMove=='P') || (computerMove=='S'&&userMove=='S')){
    console.log("The user chose " + userMove + ". The computer chose " + computerMove + ". The game is a tie.");
}
else if((computerMove=='S'&&userMove=='R') || (computerMove=='R'&&userMove=='P') || (computerMove=='P'&&userMove=='S')){
    console.log("The user chose " + userMove + ". The computer chose " + computerMove + ". The user wins.");
}
else if((computerMove=='P'&&userMove=='R') || (computerMove=='S'&&userMove=='P') || (computerMove=='R'&&userMove=='S')){
    console.log("The user chose " + userMove + ". The computer chose " + computerMove + ". The computer wins.");
}