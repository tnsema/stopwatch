

//alert("I am working");

let d = new Date();

let minutes = 0;
let seconds = 0;

let min = document.getElementById("min");
let sec = document.getElementById("sec");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

function update() {
    
    seconds++;

    if (seconds <= 9 ) {
        
        sec.innerHTML = "00" + seconds;

    } else if (seconds <= 99) {
        
        sec.innerHTML = "0" + seconds;


    } else {
        sec.innerHTML = seconds;
    }

    if (seconds > 1000) {
        
        minutes++;
        min.innerHTML = minutes;
        seconds = 0;

        if (minutes <= 9) {
            
            min.innerHTML = "0" + minutes;

        } else {
            
        }

    }


}

let interval;

start.onclick = function(){
    
    

   interval = setInterval(update,1);
   
   start.setAttribute('disabled','disabled');
   start.classList.add("disable_button");
   

}

stop.onclick = function(){

    start.innerHTML = "Continue";
    clearInterval(interval);   
    start.removeAttribute('disabled');        
    start.classList.remove("disable_button");    
                                                     

}

reset.onclick = function(){

    min.innerHTML = "00";
    sec.innerHTML = "00";
    minutes = 0;
    seconds = 0;
    clearInterval(interval);
    start.innerHTML = "Start";
    start.removeAttribute('disabled');
    start.classList.remove("disable_button");


}
