var dibujos =  document.getElementById("dibujos");
var aleatorioMax = bd.length;
var aleatorioMin = 0;
const seleccionAnimales = [];


crearArraySeleccion (bd, seleccionAnimales);

cargarBotones (); 


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
    
    console.log(seleccionAnimales);
    console.log(seleccionAnimales.length);
}

function cargarBotones () {

    dibujos.innerHTML = `
    <button class="boton1 boton"> <img src="${seleccionAnimales[0].url}" alt="Imagen del boton"> </button>
    <button class="boton2 boton"> <img src="${seleccionAnimales[1].url}" alt="Imagen del boton"> </button>
    <button class="boton3 boton"> <img src="${seleccionAnimales[2].url}" alt="Imagen del boton"> </button>
    <button class="boton4 boton"> <img src="${seleccionAnimales[3].url}" alt="Imagen del boton"> </button>
    <button class="boton5 boton"> <img src="${seleccionAnimales[4].url}" alt="Imagen del boton"> </button>
    `
}