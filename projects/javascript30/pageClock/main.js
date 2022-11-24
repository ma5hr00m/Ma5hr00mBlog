const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const time = document.getElementById("time");

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if (mins < 10 && seconds<10){
        time.innerHTML = (hour.toString()+":0"+mins.toString()+":0"+seconds.toString());
    } else if (mins < 10 && seconds > 10){
        time.innerHTML = (hour.toString()+":0"+mins.toString()+":"+seconds.toString());
    } else if (mins > 10 && seconds <10) {
        time.innerHTML = (hour.toString()+":"+mins.toString()+":0"+seconds.toString());
    } else {
        time.innerHTML = (hour.toString()+":"+mins.toString()+":"+seconds.toString());
    }
}

setInterval(setDate, 1000);