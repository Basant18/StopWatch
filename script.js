// Initialize the seconds and milli-seconds to zero
let dataMilli = 0;
let dataSec = 0;
// Put the value of seconds and milliseconds in there respective html tag
document.getElementById('displayMilli').innerText = dataMilli;
document.getElementById('displaySec').innerText = dataSec;

//Get the start button element from html
let startButton = document.getElementById('start');
// This keyword is to check if there is a start interval running or not
let interval;

//Event Listner for Start Button
startButton.addEventListener('click',function(){
    console.log("Inside Start Button");
    if(interval == undefined)
    {
        interval = setInterval(function(){
            // Check if limit of stop watch is reached or not
            if(dataSec == 99 && dataMilli == 99)
            {
                clearInterval(interval);
                alert("StopWatch Limit Reached!!!");
            }
            // Check when to reset millseconds and increase second counter
            else if(dataMilli == 99)
            {
                dataSec += 1;
                dataMilli = 0;
                document.getElementById('displayMilli').innerText = dataMilli;
                document.getElementById('displaySec').innerText = dataSec;
            }
            // increase milli-seconds counter
            else
            {
                dataMilli += 1;
                document.getElementById('displayMilli').innerText = dataMilli;
                document.getElementById('displaySec').innerText = dataSec;
            }
        },1);
    }
});

// Get the stop button from html
let stopButton = document.getElementById('stop');
// Event Listner for stop button
stopButton.addEventListener('click',function(){
    console.log("Inside Stop Button");
    //Check if interval already exists or not
    if(interval != undefined)
    {
        clearInterval(interval);
        interval = undefined;
    }
});
// Get the reset button from html
let resetButton = document.getElementById('reset');
// Event Listner for reset button
resetButton.addEventListener('click',function(){
    console.log("Inside Reset Button");
    //Check if interval already exists or not
    if(interval != undefined)
    {
        clearInterval(interval);
        interval = undefined;
    }
    dataMilli = 0;
    dataSec = 0;
    //set the reset value in the respective html tag
    document.getElementById('displayMilli').innerText = dataMilli;
    document.getElementById('displaySec').innerText = dataSec;
});