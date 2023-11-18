document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

let barra1 = document.querySelector(".fila1");
let barra2 = document.querySelector(".fila2");
let barra3 = document.querySelector(".fila3");

//Activa los estilos del CSS
function animacionMenu(){
    barra1.classList.toggle("fila1Animacion");
    barra2.classList.toggle("fila2Animacion");
    barra3.classList.toggle("fila3Animacion");
}