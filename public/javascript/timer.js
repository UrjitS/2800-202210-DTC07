alertedUser = false;
activeTimer = false;
var refreshIntervalId;

function stopTimer(displayName) {
    console.log("close");
    clearInterval(refreshIntervalId);
    document.querySelector("#" + displayName).textContent = "";

    activeTimer = false;
    alertedUser = false;
}

function startTimer(duration, displayName) {

    alertedUser = false;
    display = document.querySelector("#" + displayName);
    var timer = duration,
        minutes, seconds;
    refreshIntervalId = setInterval(function () {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            if (!alertedUser) {
                alert("Timer has Ended!");
                stopTimer(displayName);
            }
        }

    }, 1000);



}

function createTimer(duration, displayName) {
    if (!activeTimer) {
        activeTimer = true;
        startTimer(duration, displayName);
    } else {
        alert("Theres a current Active timer");
    }
}