var dibujos =  document.getElementById("dibujos");

console.log (dibujos);
console.log(bd[3].url);

cargarBotones (); 

function cargarBotones () {

    dibujos.innerHTML = `
    <button class="boton1 boton"> <img src="${bd[0].url}" alt="Imagen del boton"> </button>
    <button class="boton2 boton"> <img src="${bd[1].url}" alt="Imagen del boton"> </button>
    <button class="boton3 boton"> <img src="${bd[2].url}" alt="Imagen del boton"> </button>
    <button class="boton4 boton"> <img src="${bd[3].url}" alt="Imagen del boton"> </button>
    <button class="boton5 boton"> <img src="${bd[4].url}" alt="Imagen del boton"> </button>
    `
}