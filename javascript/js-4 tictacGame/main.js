let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let xScore = document.querySelector("#scoreX")
let oScore = document.querySelector("#scoreO")

let turnX = true; //playerX, playerO
let count = 0; //To Track Draw
let x = 0;
let o = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

xScore.style.backgroundColor = 'green'

boxes.forEach((box) => {
  if (turnX) xScore.style.backgroundColor = 'green'
  else oScore.style.backgroundColor = 'green'
  box.addEventListener("click", () => {
    let isWinner;
    if (turnX) {
      //playerX
      box.innerText = "X";
      box.style.color = "green"
      isWinner = checkWinner();
      turnX = false;
      xScore.style.backgroundColor = ''
      oScore.style.backgroundColor = 'green'
    }
    else {
      //playerO
      box.innerText = "O";
      box.style.color = "red"
      turnX = true;
      xScore.style.backgroundColor = 'green'
      oScore.style.backgroundColor = ''
    }
    box.disabled = true;
    count++;

    // let x = box.getAttribute('id');
    // console.log(x);
    // let n = Number(x);
    // let c = [[0], [2, 3, 4, 7, 5, 9], [1, 3, 5, 8], [1,2,5,6,7,9], [1,7,5,6], [1,2,3,7,9,8,4,6], [5,4,3,9], [1,3,4,8,9,5], [2,5,7,9], [1,5,3,6,7,8]];
    // // console.log(c[n]);
    // let nx = c[n];
    // console.log(nx);
    // while (count < 9 && !isWinner) {
    //   let r = Math.floor(Math.random() * c[n].length);
    //   console.log(r);
    //   let O = document.getElementById(nx[r]);
    //   if (O && !O.disabled && !isWinner) {
    //     O.innerText = "O";
    //     O.style.color = "red"
    //     O.disabled = true;
    //     turnX = true;
    //     isWinner = checkWinner();
    //     count++;
    //     break;
    //   }
    // }

    // while (count < 9 && !isWinner) {
    //   let r = Math.floor(Math.random() * 10 + 1);
    //   let O = document.getElementById(r);

    //   if (O && !O.disabled && !isWinner) {
    //     O.innerText = "O";
    //     O.style.color = "red"
    //     O.disabled = true;
    //     turnX = true;
    //     isWinner = checkWinner();
    //     count++;
    //     break;
    //   }
    // }
    isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// const turny = (x) =>{
//   // if(x==='1'){
//     let n = Number(x);
//     let c = [[0], [2, 3, 4, 7, 5, 9], [1, 3, 5, 8], [1,2,5,6,7,9], [1,7,5,6], [2,8,4,6], [5,4,3,9], [1,3,4,8,9,5], [2,5,7,9], [1,5,3,6,7,8]];
//     while (count < 9 && !isWinner) {
//       let r = Math.floor(Math.random() * c[n].length);
//       let O = document.getElementById(r);
//       if (O && !O.disabled && !isWinner) {
//         O.innerText = "O";
//         O.style.color = "red"
//         O.disabled = true;
//         turnX = true;
//         isWinner = checkWinner();
//         count++;
//         break;
//       }
//     }
//   // }
// };

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  msg.style.color = 'black';
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  if (winner == "X") { x += 1; msg.style.color = 'green'; }
  else if (winner == "O") { o += 1; msg.style.color = 'red'; }
  xScore.innerText = x;
  oScore.innerText = o;
};

function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        boxes[pattern[0]].style.backgroundColor = "yellow";
        boxes[pattern[1]].style.backgroundColor = "yellow";
        boxes[pattern[2]].style.backgroundColor = "yellow";
        return true;
      }
    }
  }
}

const resetGame = () => {
  turnX = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  // x = 0;
  // o = 0;
  for (let pattern of winPatterns) {
    boxes[pattern[0]].style.backgroundColor = "#c7fffa";
    boxes[pattern[1]].style.backgroundColor = "#c7fffa";
    boxes[pattern[2]].style.backgroundColor = "#c7fffa";
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);