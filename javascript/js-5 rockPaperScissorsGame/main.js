let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const compChoice = ()=>{
  const ops = ["rock", "paper", "scissors"];
  const r = Math.floor(Math.random()*3);
  return ops[r];
}

const draw = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

function userWin(comp){
  userScore++;
  userScorePara.innerHTML=userScore;
  msg.innerHTML=`You Win! Computer choice is ${comp}`
  msg.style.backgroundColor = "green";
}
function compWin(comp){
  compScore++;
  compScorePara.innerHTML=compScore;
  msg.innerHTML=`Computer Win! Computer choice is ${comp}`
  msg.style.backgroundColor = "red";
}

function playGame(userChoice){
  comp = compChoice();
  if(userChoice===comp)draw();
  else if((userChoice==="rock" && comp==="scissors") || 
          (userChoice==="scissors" && comp==="paper") ||
          (userChoice==="paper" && comp==="rock")){
            userWin(comp );
          }
  else {
    compWin(comp );
  }
}

choices.forEach((choice)=>{
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    // choice.classList.add("active");
    playGame(userChoice);
  })
})