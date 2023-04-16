let dataMilli = 0;
let dataSec = 0;
document.getElementById('displayMilli').innerText = dataMilli;
document.getElementById('displaySec').innerText = dataSec;

let startButton = document.getElementById('start');
let interval;
startButton.addEventListener('click',function(){
    console.log("Inside Start Button");
    if(interval == undefined)
    {
        interval = setInterval(function(){
            if(dataSec == 99)
            {
                clearInterval(interval);
                alert("StopWatch Limit Reached!!!");
            }
            else if(dataMilli == 99)
            {
                dataSec += 1;
                dataMilli = 0;
                document.getElementById('displayMilli').innerText = dataMilli;
                document.getElementById('displaySec').innerText = dataSec;
            }
            else
            {
                dataMilli += 1;
                document.getElementById('displayMilli').innerText = dataMilli;
                document.getElementById('displaySec').innerText = dataSec;
            }
        },1);
    }
});

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click',function(){
    console.log("Inside Stop Button");
    if(interval != undefined)
    {
        clearInterval(interval);
        interval = undefined;
    }
});

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click',function(){
    console.log("Inside Reset Button");
    if(interval != undefined)
    {
        clearInterval(interval);
        interval = undefined;
    }
    dataMilli = 0;
    dataSec = 0;
    document.getElementById('displayMilli').innerText = dataMilli;
    document.getElementById('displaySec').innerText = dataSec;
});