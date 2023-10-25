const deg = 6;
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(()=>{
    let tiempo = new Date();
    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg;
    let seg = tiempo.getSeconds()*deg;

    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`; 
    segundos.style.transform = `rotate(${seg}deg)`;
})

function calculateTime(){
    let time = new Date()

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let AMPM = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour === 0 ? 12 : hour; 


    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    let clockDisplay = `${hour} : ${minute} : ${second} ${AMPM}`;


    let digitalClock = document.querySelector(".reloj2")
    digitalClock.innerHTML = clockDisplay;

}

setInterval(calculateTime, 1000)