

 function getUserChoice(userInput) {
     userInput = prompt("Rock, paper, or scissors?")
     userInput = userInput.toLowerCase();
     if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
         return userInput
     } else {
         console.log('Error, please type: rock, paper, or scissors')
     }
 }

 const rpsArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            
        case 1:
            return 'paper';
            
        case 2: 
            return 'scissors';
            
    }
};

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie';
    } 

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer wins!";

        } else {
            return "You win!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Sorry, computer wins!";
        } else {
            return "You win!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, computer wins!";
        } else {
            return "You win!";
        }
    }


};

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${userChoice}`);
    console.log(`The computer chose ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
};

for (let i = 0; i <5; i++) {
    playGame();
}
