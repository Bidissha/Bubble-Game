var a,num
function makeBubble(){
    var bubble=""
    for(i=1; i<=160; i++){
        a=Math.floor(Math.random()*10)
        bubble+=`<div class="bubble"><div class="bval">${a}</div></div>`
    }
    document.querySelector("#pbttm").innerHTML=bubble
}
var num1
function generateNum(){
    num1=Math.floor(Math.random()*10)
    num=`<div class="val">${num1}</div>`
    document.querySelector("#hitbox").innerHTML=num

}

var timer=60
var score=0
var timer1

function setTimer(){
    timer1=setInterval(function(){
        if(timer>0){
        timer--
        document.querySelector("#timerbox").innerHTML=timer}
        else{
            clearInterval(timer1)
            document.querySelector("#pbttm").innerHTML=" <h1>Time Over</h1>"
        }

    },1000)
    
}

function scoreUpdate(){
    score+=10
    document.querySelector("#scoreval").innerHTML=score
}
var val
var details
var flag =0
var sbutton =document.querySelector("#start")
sbutton.addEventListener("click",function(){
    if (flag===0){
        flag++
        timer=60
        setTimer()
        generateNum()
        makeBubble()
        sbutton.innerHTML="Restart"
        document.querySelector("#pbttm").addEventListener("click", function(details){
            val=Number(details.target.textContent)
            if(val===num1){
                scoreUpdate()
                generateNum()
                makeBubble()
            }
        })
    }
    else{
        score=0
        document.querySelector("#scoreval").innerHTML=score
        generateNum()
        makeBubble()
        clearInterval(timer)
        timer=60
        document.querySelector("timerbox").innerHTML=timer
        setTimer()
        document.querySelector("#pbttm").addEventListener("click", function(details){
            val=Number(details.target.textContent)
            if(val===num1){
                scoreUpdate()
                generateNum()
                makeBubble()
            }
        })
    }
})
generateNum()
makeBubble()
