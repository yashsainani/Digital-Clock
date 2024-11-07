const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const meridiem = document.getElementById('meridiem');

function clock() {
    const currTime = new Date();
    let currHour = currTime.getHours();
    let currMinute = currTime.getMinutes();
    let currSeconds = currTime.getSeconds();
    meridiem.textContent = currHour >= 12 ? 'PM' : 'AM';
    currHour = currHour > 12 ? currHour % 12 : currHour;
    currHour = converting(currHour);
    currMinute = converting(currMinute);
    currSeconds = converting(currSeconds);
    hour.textContent = currHour;
    minute.textContent = currMinute;
    second.textContent = currSeconds;
}

function converting(val) {
    return val < 10 ? '0' + val : val;
}

clock();

setInterval(clock, 1000);