let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // trunO  , turnX

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    [2,4,6]
]

const resetGame = () =>{
    turnO = true; // trunO  , turnX
    enabledBoxes();
    msgContainer.classList.add("hide");
}; 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked",box);
        if (turnO) {
        box.innerText = "O";
        box.style.color = "rgb(228, 53, 226)";
        turnO = false;
        } else {
        box.innerText = "X"
        turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
};

const enabledBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if (pos1val !=="" && pos2val !== "" && pos3val !== "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner",pos1val);  
                showWinner(pos1val); 
            };
        };
    };
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);

