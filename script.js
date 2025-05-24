let boxs = document.querySelectorAll(".box");
let resetbut = document.querySelector("#reset");
let newbut = document.querySelector("#New");
let msgcon = document.querySelector(".msg-container");
let msgs = document.querySelector("#msg");

let arr = [
  [0,1,2],  
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ];
let turnO = true;

const resetGame = () => {
  turnO = true;
  enablebox();
  msgcon.classList.add("hide");
};

boxs.forEach((box) => {
  box.addEventListener("click",() => {
    if ( turnO ) {
      box.innerText = "O";
      turnO = false;
    }
    else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disablebox = () => {
  for ( let box of boxs ) {
    box.disabled = true;
  }
}

const enablebox = () => {
  for ( let box of boxs ) {
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) => {
  msgs.innerText = `Congratulation, Winner is ${winner}`;
  msgcon.classList.remove("hide");
  disablebox();
};

const checkwinner = () => {
  for ( let pattern of arr ) {
    let pos1 = boxs[pattern[0]].innerText;
    let pos2 = boxs[pattern[1]].innerText;
    let pos3 = boxs[pattern[2]].innerText;
    
    if ( pos1 != "" && pos2 != "" && pos3 != "") {
      if ( pos1 == pos2 && pos2 == pos3 ) {
        showWinner(pos1);
      }
    }
  }
};

resetbut.addEventListener("click",resetGame);
newbut.addEventListener("click",resetGame);