var redBallonsPopped = 0
// var redBalloonToPopped = Math.floor(Math.random() * 6) + 1;     //1 to 6
// var timeAllowed = Math.floor(Math.random() * 10) + 1;   //1 to 10 
var redBalloonToPop = 3
var timeAllowed = 20

//tell user time left
document.getElementById("thisTimer").innerText = timeAllowed
var seconds = 0
function countSeconds(){
    seconds++
    if(seconds == timeAllowed){
        location.href = "locked.html"
    }
    document.getElementById("thisTimer").innerText = (timeAllowed - seconds)
}
var idk = setInterval(countSeconds, 1000)

//tell user how many balloons to pop
document.getElementById("NumBalloonPops").innerText = redBalloonToPop


//red balloon events
document.getElementById("r1").addEventListener("touchend", function(){
    document.getElementById("r1").src = "redPop.jpg"
    redBallonsPopped++
    if(redBallonsPopped == redBalloonToPop){
        location.href = "unlocked.html"
    }
})
document.getElementById("r2").addEventListener("touchend", function(){
    document.getElementById("r2").src = "redPop.jpg"
    redBallonsPopped++
    if(redBallonsPopped == redBalloonToPop){
        location.href = "unlocked.html"
    }
})
document.getElementById("r3").addEventListener("touchend", function(){
    document.getElementById("r3").src = "redPop.jpg"
    redBallonsPopped++
    if(redBallonsPopped == redBalloonToPop){
        location.href = "unlocked.html"
    }
})
document.getElementById("r4").addEventListener("touchend", function(){
    document.getElementById("r4").src = "redPop.jpg"
    redBallonsPopped++
    if(redBallonsPopped == redBalloonToPop){
        location.href = "unlocked.html"
    }
})
document.getElementById("r5").addEventListener("touchend", function(){
    document.getElementById("r5").src = "redPop.jpg"
    redBallonsPopped++
    if(redBallonsPopped == redBalloonToPop){
        location.href = "unlocked.html"
    }
})
document.getElementById("r6").addEventListener("touchend", function(){
    document.getElementById("r6").src = "redPop.jpg"
    redBallonsPopped++
    if(redBallonsPopped == redBalloonToPop){
        location.href = "unlocked.html"
    }
})

//blue balloon events
document.getElementById("b1").addEventListener("touchend", function(){
    location.href = "locked.html"
})
document.getElementById("b2").addEventListener("touchend", function(){
    location.href = "locked.html"
})
document.getElementById("b3").addEventListener("touchend", function(){
    location.href = "locked.html"
})
document.getElementById("b4").addEventListener("touchend", function(){
    location.href = "locked.html"
})

document.getElementById("dart").addEventListener("touchstart", e => {
    e.preventDefault()
})

//tap the screen to change page 
document.getElementById("unlocked").addEventListener("touchend", function(){
    location.href = "locked.html"
})
document.getElementById("locked").addEventListener("touchend", function(){
    location.href = "index.html"
})
