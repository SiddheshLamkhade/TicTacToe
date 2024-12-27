let boxes = document.querySelectorAll('.box')


let resetbtn = document.querySelector('#resetbtn');
let msgcontainer=document.querySelector(".winnermsgcontainer");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#newbtn");


let turnO = true //player X, player O

let winarr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

boxes.forEach(eachelement => {
    eachelement.addEventListener('click', () => {
        console.log('box was clicked');
        if (turnO) {
            eachelement.innerText = 'O';     
            eachelement.style.color = '#fde424';  // Set color for 'O'
            turnO = false;
        } else {
            eachelement.innerText = 'X';
            eachelement.style.color = 'red';  // Set color for 'O'
            turnO = true;
        }
        eachelement.disabled = true;//it is js property
        checkWinner();
    });  // Closing parenthesis for addEventListener
});  // Closing parenthesis for forEach
//array method ... loops for each element of array .. applies given function to each element of array

const showWinner=(winnerparmeter)=>
{
    msg.innerText=`Congratulations, Winner is ${winnerparmeter}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>
    {
        for(let box of boxes)
        {
            box.disabled=true;
        }
    }

const enableBoxes=()=>
{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}


const resetGame=()=>
    {
        turn0=true;
        enableBoxes();
        msgcontainer.classList.add("hide");
    }


const checkWinner=()=>{          //arrow function
    for (let pattern of winarr)  //for values of array
    {/*
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);   let pos3val=boxes[pattern[2]].innerText;
    */

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
     
        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val ===pos2val && pos2val ===pos3val)
            {
                console.log("winner","is",pos1val);
                showWinner(pos1val);
            }
        }
    }   
    //for...of loop is used to iterate over the values of the array elements
};




newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);