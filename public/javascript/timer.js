alertedUser = false;
activeTimer = false;
var refreshIntervalId;

/**
 * Stops the current active timer and resets all global variables
 * @param {String} displayName Name of the displayed timer
 */
function stopTimer(displayName) {
    clearInterval(refreshIntervalId);
    document.querySelector("#" + displayName).textContent = "";
    activeTimer = false;
    alertedUser = false;
}
/**
 * Starts a timer to the specified duration
 * @param {*} duration Number of seconds the timer starts at
 * @param {*} displayName Name of the displayed timer
 */
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
/**
 * Creates a new timer when called, ensuring no other timer exists
 * @param {*} duration Number of seconds the timer starts at
 * @param {*} displayName Name of the displayed timer
 */
function createTimer(duration, displayName) {
    if (!activeTimer) {
        activeTimer = true;
        startTimer(duration, displayName);
    } else {
        alert("Theres a current Active timer");
    }
}