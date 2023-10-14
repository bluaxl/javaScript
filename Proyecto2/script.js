function calculateTime(){
    let time = new Date()

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    let clockDisplay = `${hour} : ${minute} : ${second}`;
    let digitalClock = document.querySelector(".reloj")
    digitalClock.innerHTML = clockDisplay;

}

setInterval(calculateTime, 1000)