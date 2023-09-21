let gameSeq=[];
let userSeq=[];

let level=0;
let start=false;
let hightest1=0;

let color=["blue","brown","aqua","red"];

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game Started");
        start=true;
        levelUp();
    }
});

// level up
let h2=document.querySelector("h2");
 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Label ${level}`;
    //random color
    let randomInd=Math.floor(Math.random()*3);
    let randomcol=color[randomInd];
    let ranBtn=document.querySelector(`.${randomcol}`);
    gameSeq.push(randomcol);
    console.log(gameSeq);
    autoFlex(ranBtn);
    if (level > hightest1) {
        hightest1 = level;
      }
 }

//Method for button flash

function autoFlex(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

//flex mathod for user

function userFlex(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function check(indx){
    if(gameSeq[indx]===userSeq[indx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`<span style="color:green">High score ${hightest1}</span> <br> Game Over! press any key to start <br>Your score is ${level} `;
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="white";
        },150)
        restartGam();
    }
}

function butnPress(){
    let btn=this;
    userFlex(btn);
    let userColor=btn.getAttribute("id")
    userSeq.push(userColor);
    check(userSeq.length-1);
}
// userFlash
let allBtns=document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",butnPress)
}

function restartGam(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}