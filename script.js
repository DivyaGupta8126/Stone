let userscore=0;
let compscore=0;
let val;

let stone=document.getElementById("stone");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let user=document.getElementById("user");
let computer=document.getElementById("computer");
let move=document.getElementById("move");


function compChoice(){
  let arr=["stone","paper","scissor"];
  let ind=(Math.floor(Math.random()*3));
  return arr[ind];
}

stone.addEventListener("click",()=>{
  val="stone";
  playGame();
});

paper.addEventListener("click",()=>{
val="paper";
playGame();
});

scissor.addEventListener("click",()=>{
  val="scissor";
  playGame();
})


function playGame()
{
  userval=val;
  compval=compChoice();
  console.log(userval,compval);
  if(userval===compval)
  {
    console.log("Draw");
  }
  else if((userval==='stone'&&compval==='scissor')||((userval==='paper'&&compval==='stone'))||(userval==='scissor'&&compval==='paper')) {
    console.log(`User wins. ${userval} beats ${compval}`);
    userscore++;
    user.innerText=userscore;
    move.innerText=`User wins. ${userval} beats ${compval}`;
  }
  else
  {
    console.log(`Computer wins. ${compval} beats ${userval}`);
    compscore++;
    computer.innerText=compscore;
    move.innerText=`Computer wins. ${compval} beats ${userval}`;
  }
  display();
}

function display() {
  if(userscore===5)
  {
    document.getElementById("box").style.display="none";
    move.innerText="Congratulations you won !";
  }
  if(compscore===5)
  {
    document.getElementById("box").style.display="none";
    move.innerText="Sorry you lost :(";
  }
}