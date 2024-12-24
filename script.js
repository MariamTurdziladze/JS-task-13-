const finalDate = new Date("Dec 31, 2024, 16:44:49").getTime();

const updateCountDown = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = finalDate - now;

    const days = pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (timeLeft <= 0) {
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        clearInterval(updateCountDown);
    }

}, 1000);
   

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}