let intentos = 6;
let diccionario = ["APPLE", "ZORRO", "PERRO", "LAPIZ", "SANTO", "MUNDO", "LECHE", "SILLA", "COSMO", "FELIZ"];
let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
const INPUT = document.getElementById("guess-input");
const BUTTON = document.getElementById("guess-button");
const GRID = document.getElementById("grid");
const INTENTOS = document.getElementById("intentos");

BUTTON.addEventListener("click", intentar);

function intentar() {
    const INTENTO = leerIntento();
    INPUT.value = "";
    if (INTENTO === undefined) {
        return;
    } else {
        if (palabra === INTENTO) {
            const ROW = document.createElement("div");
            ROW.className = "row";
            for (let i in palabra) {
                const SPAN = document.createElement("span");
                SPAN.className = "letter";
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.backgroundColor = "#7bd389";
                ROW.appendChild(SPAN);
            }
            GRID.appendChild(ROW);
            terminar("<h1>GANASTE!😎</h1>");
        } else {
            const ROW = document.createElement("div");
            ROW.className = "row";
            for (let i in palabra) {
                const SPAN = document.createElement("span");
                SPAN.className = "letter";
                if (INTENTO[i] === palabra[i]) {
                    // Pintar en verde la letra en la posición correcta
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = "#7bd389";
                    console.log("Se encontró la letra " + INTENTO[i]);
                } else if (palabra.includes(INTENTO[i])) {
                    // Pintar en amarillo la letra en la posición incorrecta
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = "#f7e157";
                    console.log("La letra " + INTENTO[i] + " está en la palabra, pero en la posición incorrecta");
                } else {
                    // Pintar en gris la letra que no está en la palabra
                    SPAN.innerHTML = INTENTO[i];
                    SPAN.style.backgroundColor = "#d3d3d3";
                    console.log("La letra " + INTENTO[i] + " no está en la palabra");
                }
                ROW.appendChild(SPAN);
            }
            GRID.appendChild(ROW);

            intentos--;
            console.log("¡Fallaste! Te quedan " + intentos + " intentos.");
            INTENTOS.innerHTML = "Intentos restantes: " + intentos;
            if (intentos === 0) {
                terminar("<h1>PERDISTE!😖</h1>");
            }
        }
    }
}

function leerIntento() {
    const VALOR = INPUT.value;

    if (VALOR === "" || VALOR === null || VALOR === undefined || VALOR.length !== 5 || !isNaN(VALOR)) {
        alert("Debes ingresar una palabra con 5 letras!");
        return;
    } else {
        return VALOR.toUpperCase();
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BUTTON.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}

