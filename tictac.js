const boxes = document.getElementsByClassName("Box")
const winnerMessage = document.querySelector(".winner")
const Restart = document.querySelector(".btn")

// Game Reset
Restart.addEventListener("click",()=>{Reset()})

let Player = "⭕"  // Assigning Player
let GameBox_Copy=["","","","","","","","",""]

// Possibilities of Winning
const Winning_Stats=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Setting Click event for each boxes
let GameBox = [...boxes]
GameBox.forEach((box,id)=>{
    box.addEventListener("click",(event)=>{handleClick(event,id)})
})

// Handling GamePlay
function handleClick(event,id){
    Player=Player==="❌"?"⭕":"❌"
    if(event.target.innerText===""){
        event.target.innerText=Player
        GameBox_Copy[id]=Player
        setTimeout(()=>{
            if(winner()) alert(`Winner is ${Player}`)
            if(!GameStats() && !winner()){
                setTimeout(()=>Reset(),2000)
                alert("Match Draw")
            } 
        },50)
    }
    else{
        alert(`Missed your turn ${Player}`)
    }
}

// Check Game status
function GameStats(){
    let stats=false;
    GameBox_Copy.forEach(box=>{
        if(box==""){
            stats=true;
        }
    })
    return stats;
}

// Check winner
function winner(){
    for(let win of Winning_Stats){
        let[a,b,c]=win
        if(GameBox_Copy[a]==Player && ((GameBox_Copy[a]==GameBox_Copy[b]) && (GameBox_Copy[c]==GameBox_Copy[b]))){
            setTimeout(()=>Reset(),2000)
            return true
        }
    }
    return false
}

// Reset Game
function Reset(){
    Player="⭕"
    GameBox.forEach((box,id)=>{
        box.innerText=""
        GameBox_Copy=["","","","","","","","",""]
    })
}
