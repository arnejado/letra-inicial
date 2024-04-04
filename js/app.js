var dibujos =  document.getElementById("dibujos");
var divLetraPantalla = document.getElementById("letra");
var aleatorioMax = bd.length;
var aleatorioMin = 0;
const seleccionAnimales = [];
var letraPantalla = ""
var letraSeleccionada = "";
var palabraReproducir = "";
const botones = document.querySelectorAll(".boton");


crearArraySeleccion (bd, seleccionAnimales);
seleccionLetra ();
cargarBotones (); 

// Aquí nos ponemos en la escucha de los botones



// Parte de las funciones

function crearArraySeleccion (bd, seleccionAnimales) {
    
    const idsSeleccionados = new Set();
    
    while (seleccionAnimales.length < 5) {
        const indiceAleatorio = Math.floor(Math.random() * bd.length);
        const animalAleatorio = bd[indiceAleatorio];
        
        if (!idsSeleccionados.has(animalAleatorio.inicial)) {
            seleccionAnimales.push(animalAleatorio);
            idsSeleccionados.add(animalAleatorio.inicial);
        }
    }    
    
}

function seleccionLetra () {
    const indiceLetra = Math.floor(Math.random() * 5);
    letraPantalla = seleccionAnimales[indiceLetra].inicial;
    console.log(letraPantalla)
    palabraReproducir = seleccionAnimales[indiceLetra].animal;
    console.log(palabraReproducir);
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
    const botones = document.querySelectorAll(".boton");
    console.log(botones);

    botones.forEach((boton) => {
            boton.addEventListener("click", () => {
            // Obtiene el ID del botón clickeado
            const idBoton = boton.querySelector("img").id;
            // Asigna la letra del ID a la variable
            letraSeleccionada = idBoton;

            console.log(`Letra seleccionada: ${letraSeleccionada}`);
            console.log(`Letra Pantalla: ${letraPantalla}`);
            console.log(typeof letraSeleccionada)
            console.log(typeof letraPantalla)
            
            if (letraPantalla === letraSeleccionada) {
                console.log("letra correcta");
                boton.classList.add("acierto"); // Agrega la clase "acierto"

                //lo de decir al animal
                const utterance = new SpeechSynthesisUtterance(palabraReproducir);
                    utterance.voice = speechSynthesis.getVoices()[2]; // Elige una voz (puedes obtener la lista de voces disponibles)
                    utterance.rate = 1.0; // Velocidad normal
                    utterance.pitch = 1.0; // Tono normal

                    window.speechSynthesis.speak(utterance); //reproduce


                setTimeout(() => {
                    location.reload(); // Recarga la página
                }, 2000);
            } else {
                console.log("letra incorrecta");
                boton.classList.add("fallo"); // Agrega la clase "fallo"
            }
        });
    });

    

}
