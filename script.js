let miliseconds = 00;

let seconds = 00;

let appendMili = document.getElementById('miliseconds');

let appendSeconds = document.getElementById('seconds');

let startButton = document.getElementById('start');

let stopButton = document.getElementById('stop');

let resetButton = document.getElementById('reset');

let Interval;

startButton.onclick = function(){

    clearInterval(Interval);

    Interval = setInterval(startTimer, 10);

}

stopButton.onclick = function(){

    clearInterval(Interval);

}

resetButton.onclick = function(){

    clearInterval(Interval);

    miliseconds = '00';

    seconds = '00';

    appendMili.innerHTML = miliseconds;

    appendSeconds.innerHTML = seconds;

}

function startTimer(){

    miliseconds++;

    if(miliseconds < 9){

        appendMili.innerHTML = '0' + miliseconds;

    } if (miliseconds > 9){

        appendMili.innerHTML = miliseconds;

    } if (miliseconds > 99){

        seconds++;

        appendSeconds.innerHTML = '0' + seconds;

        miliseconds = 0;

        appendMili.innerHTML = "0" + 0;

    } if (seconds > 9){

        appendSeconds.innerHTML = seconds;

    }

}