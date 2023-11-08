let noel = "off";
let noelStop = document.getElementById("noelStop");
var pepe = document.getElementById("bt1")
var boton2 = document.getElementById("bt2")

let botonAudio = new Audio ('./sound/musica.mp3');

function obtenerTiempoFaltante(fechaLimite){
    pepe.classList.add("of")
    boton2.classList.add("of")

    let ahora = new Date()
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000)/1000
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante /60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante /3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return{
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }

};


//console.log(obtenerTiempoFaltante('Dec 25 2023 00:00:00 GMT-0500'));

function cuentaRegresiva(tiempoFaltante, reloj, mensaje){
    
    dias = document.getElementById('dias');
    horas = document.getElementById('horas');
    minutos = document.getElementById('minutos');
    segundos = document.getElementById('segundos');

    const tiempoActual = setInterval(()=>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = `${t.diasFaltantes}`;
        horas.innerHTML = `${t.horasFaltantes}`;
        minutos.innerHTML = `${t.minutosFaltantes}`;
        segundos.innerHTML = `${t.segundosFaltantes}`;


        if(t.tiempoFaltante <= 1 && noel == "off"){
            clearInterval(tiempoActual);

            const  e = document.getElementById("mensaje")
            e.innerHTML = mensaje;
            dias.innerHTML = "00"
            horas.innerHTML = "00"
            minutos.innerHTML = "00"
            segundos.innerHTML = "00"
            
            noelStop.classList.add("on");
            pepe.classList.remove("of");
            pepe.classList.add("on")
            boton2.classList.remove("of");
            boton2.classList.add("on")
        }
        
    },1000);
};

cuentaRegresiva('NOV 08 2023 17:26:00', 'cuentaRegresiva','!Feliz Navidad¡')

function play(){
    botonAudio.play();
}
function pause(){
    botonAudio.pause();
}


