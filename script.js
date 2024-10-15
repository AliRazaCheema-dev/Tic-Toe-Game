let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let playerO = true;  //playero, playerX
const ResetGame=()=>{
    enableBtns();
    playerO = true;
    msgContainer.classList.add("hide");
    count=0;
}

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO) {
            box.innerText = "O";
            box.style.color="green";
            playerO = false;
        }
        else {
            box.innerText = "X";
            box.style.color="red";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();

    })
    box.addEventListener("click",()=>{
        count++;
        console.log(count);
        if (count===9){
            showdraw();
        }
    })
})

const disableBtns= ()=> {
    for (box of boxes){
        box.disabled=true;
    }
}
const enableBtns= ()=> {
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner)=> {
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}
const showdraw= ()=> {
    msg.innerText=`Draw`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for (let pattern of winPattern) {
            
            let pos1val= boxes[pattern[0]].innerText; 
            let pos2val= boxes[pattern[1]].innerText; 
            let pos3val= boxes[pattern[2]].innerText;
            console.log(pos1val,pos2val, pos3val);
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if( pos1val === pos2val && pos2val === pos3val){
                console.log("player"); 
                showWinner(pos2val);
            }
        }
    }
}
newGameBtn.addEventListener("click", ResetGame);
resetBtn.addEventListener("click", ResetGame);