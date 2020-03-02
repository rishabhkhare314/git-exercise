var seconds=00;
var id=0;
var minutes =0;
var hour =0 ;
milliSecond = 0;
setInterval(date_message,1000)

function date_message() {
    date = new Date();
    months = ["January", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    document.getElementById('date').innerHTML=  zero(date.getDate()) +
    " - "+months[date.getMonth()] + " - "+date.getFullYear();
    document.getElementById('time').innerHTML= date.getHours() +' : '+
    date.getMinutes() +" : "+date.getSeconds() ;
}


function message() {
    
    document.getElementById('display').innerHTML=  "<span>"+zero(hour) +"</span> : " + zero(minutes) + " : <span>" +zero(seconds) + "</span> :"+zero(milliSecond) +"</span>"  ;  
    milliSecond++; 
   
  
    if(seconds / 60 == 1) {
        seconds=0;
        minutes++;
    }
    if(minutes / 60 == 1) {
        minutes=0;
        hour++;
    }
    if(milliSecond/100 == 1){
        seconds++;
        milliSecond =0 ;
    }
   
    

}

function start() {
    //message();
    id = setInterval(message,10);
    document.getElementById("start").innerHTML= "Resume";
    document.getElementById("start").disabled = true;
    document.getElementById("stop").hidden = false;
    document.getElementById("reset").hidden = false;
}

function stop() {
    clearInterval(id);
    document.getElementById("start").innerHTML= "Resume";
    document.getElementById("start").disabled = false;

} 

function clr() {
    console.log("helllo");
    clearInterval(id,1000);
    seconds =0;
    minutes =0;
    hour=0;
    document.getElementById("start").innerHTML= "Start";
    document.getElementById("start").disabled = false;
    document.getElementById("stop").hidden = true;
    document.getElementById("reset").hidden = true;
    display.textContent="00:00:00";
    //return message()
    
}

function zero(value) {
    return value < 10 ? "0"+value : value;

}
document.getElementById("stop").hidden = true;
document.getElementById("reset").hidden = true;