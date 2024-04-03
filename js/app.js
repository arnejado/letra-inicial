var dibujos =  document.getElementById("dibujos");

console.log (dibujos);

cargarBotones (); 

function cargarBotones () {
    dibujos.innerHTML = `
    <button class="boton4 boton"> <img src="/imagenes/004.jpeg" alt="Imagen del boton"> </button>
    <button class="boton2 boton"> <img src="/imagenes/002.jpeg" alt="Imagen del boton"> </button>
    <button class="boton3 boton"> <img src="/imagenes/003.jpeg" alt="Imagen del boton"> </button>
    <button class="boton5 boton"> <img src="/imagenes/005.jpeg" alt="Imagen del boton"> </button>
    <button class="boton1 boton"> <img src="/imagenes/001.jpeg" alt="Imagen del boton"> </button>
    `
}