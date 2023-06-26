var time = 0.2 * 60;

var itemCountdown = document.querySelector('.countdown-item');

var func = setInterval(function Cd() {

    time--;
    overtime = time - 0;

    minute = Math.floor(time / 60);
    second = time % 60;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
    if (overtime < 0) {
        clearInterval(func);
        document.getElementById("minute").innerHTML = 0;
        document.getElementById("second").innerHTML = 0;
        document.getElementById("timeout").innerHTML = "timeout";
    }
}, 1000);
function resume() {
    setInterval(function Cd() {

        time--;
        overtime = time - 0;

        minute = Math.floor(time / 60);
        second = time % 60;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = second;
        if (overtime < 0) {
            clearInterval(func);
            document.getElementById("minute").innerHTML = 0;
            document.getElementById("second").innerHTML = 0;
            document.getElementById("timeout").innerHTML = "timeout";
        }
    }, 1000);
}
function pause() {
    clearInterval(func);
}
