/**
 * Clock Widget
 *
 * Created by asakawa on 6/17/16.
 */
function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var ampm = "AM";

    if(hour > 12){ //in the PM
        hour -= 12;
        ampm = "PM"
    }

    hour = checkTime(hour);
    minute = checkTime(minute);

    document.getElementById('clock').innerHTML =
        hour + ":" + minute + " " + ampm;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}
