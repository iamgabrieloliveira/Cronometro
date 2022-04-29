var intervalo;
var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;

function twoDigits(digit){
    if(digit < 10){
        return '0' + digit
    }else 
    return digit
}

function start(){
    intervalo = setInterval(watch, 10)
}

function pause(){
    clearInterval(intervalo)
}

function stop(){
    clearInterval(intervalo)
    document.querySelector('.watch').innerHTML = '00:00:00:000'
}

function watch(){
    
    if((milisec += 10) == 1000){
        milisec = 00;
        sec++
    }
    if(sec == 60){
        sec = 0;
        min ++
    }
    if(min == 60){
        min = 0;
        hour ++
    }
    document.querySelector('.watch').innerHTML = twoDigits(hour) + ':' + twoDigits(min) + ':' + twoDigits(sec)  + ':' + twoDigits(milisec)
}
