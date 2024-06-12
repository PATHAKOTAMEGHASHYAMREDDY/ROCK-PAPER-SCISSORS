let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#User-score");
const compScorePara=document.querySelector("#Comp-score");

const drawGame=()=>{
    msg.innerText=("Game was Draw. Play Again");
    msg.style.background='black';
}

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=(`You Win Your ${userChoice} beats ${compChoice}`);
        msg.style.background='green';
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=(`You Lost  ${compChoice} beats Your ${userChoice}`);
        msg.style.background='red';
    }
}

const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    
    const compChoice=genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    }else{
        let userWin=true;

        if(userChoice === 'rock'){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === 'paper'){
            userWin= compChoice === "scissors" ? false : true;
        }else{
            userWin= compChoice === "rock" ? false: true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});