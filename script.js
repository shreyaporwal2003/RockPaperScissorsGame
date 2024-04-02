let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];


    //rock,paper,scissors

}
const drawGame=() =>{
    
    msg.innerText="Game was draw. Play again!";
     msg.style.backgroundColor=" hsl(212, 72%, 11%)";

}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        
        compScore++;
        compScorePara.innerText=compScore;
         msg.innerText=`You lose! ${compChoice} beats Your ${userchoice}`;
         msg.style.backgroundColor="red";

    }

}

const playGame=(userchoice)=>{
    
    //Genrate computer choices
    const compChoice=genCompChoice();
    

    if(userchoice=== compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice ==="rock"){
            //scissors,paper
            userWin=compChoice==="paper"? false : true;



        }
        else if(userchoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors"? false : true;

        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);

    }




};
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");

       
        playGame(userchoice);


    });


});