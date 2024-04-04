var dibujos =  document.getElementById("dibujos");
var divLetraPantalla = document.getElementById("letra");
var aleatorioMax = bd.length;
var aleatorioMin = 0;
const seleccionAnimales = [];
var letraPantalla = ""
let letraSeleccionada = "";
const botones = document.querySelectorAll(".boton");


crearArraySeleccion (bd, seleccionAnimales);
seleccionLetra (letraPantalla);
cargarBotones (); 

// Aquí nos ponemos en la escucha de los botones

console.log (botones)

botones.forEach((boton) => {
    console.log("haciendo un foreach de toda la vida");
    boton.addEventListener("click", () => {
        // Obtiene el ID del botón clickeado
        console.log("clicando dentro de la funcion")
        const idBoton = boton.querySelector("img").id;
        // Asigna la letra del ID a la variable
        letraSeleccionada = idBoton;
        console.log(`Letra seleccionada: ${letraSeleccionada}`);
        // Aquí puedes realizar otras acciones con la letra seleccionada
    });
});

// Parte de las funciones

function crearArraySeleccion (bd, seleccionAnimales) {
    
    const idsSeleccionados = new Set();
    
    while (seleccionAnimales.length < 5) {
        const indiceAleatorio = Math.floor(Math.random() * bd.length);
        const animalAleatorio = bd[indiceAleatorio];
        
        if (!idsSeleccionados.has(animalAleatorio.id)) {
            seleccionAnimales.push(animalAleatorio);
            idsSeleccionados.add(animalAleatorio.id);
        }
    }    
    
}

function seleccionLetra (letraPantalla) {
    const indiceLetra = Math.floor(Math.random() * 5);
    letraPantalla = seleccionAnimales[indiceLetra].inicial;
    console.log(letraPantalla)
    divLetraPantalla.textContent = letraPantalla;
    
}

function cargarBotones () {
    dibujos.innerHTML = `
    <button class="boton boton1"> <img id="${seleccionAnimales[0].inicial}" src="${seleccionAnimales[0].url}" alt="${seleccionAnimales[0].animal}"> </button>
    <button class="boton boton2"> <img id="${seleccionAnimales[1].inicial}" src="${seleccionAnimales[1].url}" alt="${seleccionAnimales[1].animal}"> </button>
    <button class="boton boton3"> <img id="${seleccionAnimales[2].inicial}" src="${seleccionAnimales[2].url}" alt="${seleccionAnimales[2].animal}"> </button>
    <button class="boton boton4"> <img id="${seleccionAnimales[3].inicial}" src="${seleccionAnimales[3].url}" alt="${seleccionAnimales[3].animal}"> </button>
    <button class="boton boton5"> <img id="${seleccionAnimales[4].inicial}" src="${seleccionAnimales[4].url}" alt="${seleccionAnimales[4].animal}"> </button>
    `
}
