var colors = ["Blue", "Red", "Green", "Yellow"];
function startGame(){
    setInterval(timer, 1000);
    reset();
}

var checkmark = document.getElementById("checkmark")

function reset(){
    var random1 = Math.floor(Math.random()*2);
    if(random1 == 0){
        var color1 = document.getElementById("color1");
        var color2 = document.getElementById("color2");
    } else {
        var color2 = document.getElementById("color2");
        var color1 = document.getElementById("color1");
    }
    document.getElementById("start").style.display = "none";
    var random = Math.floor(Math.random()*4);
    var correctAnswer = colors[random];
    color1.innerHTML =  correctAnswer;
    color2.style.color = correctAnswer;
    if(random+1==4){
        color2.innerHTML=colors[random-3];
    } else {
        color2.innerHTML=colors[random+1];
    }
    if(random-1==-1){
        color1.innerHTML=colors[random+3];
    } else {
        color1.innerHTML=colors[random-1]; 
    }
    color1.style.display = "block";
    color2.style.display = "block"

}