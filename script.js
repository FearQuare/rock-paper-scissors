let getComputerChoice = () => {
   let choice = Math.floor(Math.random() * 3);
   switch (choice) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissor";
    default:
        return "What an unexpected choice!";
   }
}

let getHumanChoice = () => {
 let choice = prompt("Choose your side! Type rock, paper or scissor!").toLowerCase();
 if (choice != "rock" && choice != "paper" && choice != "scissor") {
    alert("Please enter the valid responses listed before :(");
    getHumanChoice();
 } else {
    return choice;
 }
}

let compare = () => {
    let human = getHumanChoice();
    let computer = getComputerChoice();

    if(human == computer) {
        alert("Tie!")
    } else if ((human == "rock" && computer == "scissor") || (human == "paper" && computer == "rock") || (human == "scissor" && computer == "paper") ){
        alert("You won!");
        alert(`${human} vs ${computer}`);
    } else {
        alert("Computer won!");
        alert(`${human} vs ${computer}`);
    }
}

while(true){
    compare();
}