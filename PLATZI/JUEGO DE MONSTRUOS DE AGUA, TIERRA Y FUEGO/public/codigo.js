//Escondiendo secciones hasta que sea su turno de usarse
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionBotonReiniciar = document.getElementById("reiniciar")
/*hacemos "variable" para que "botonMascota" tome del documento 
de html rl elemento con el id llamado "boton-Mascota" (boton)*/
const botonMascota = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")


const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")


const spanMascotaEnemigo = document.getElementById("mascota-enemigo")


const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")


const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

//en los corechetes cuadrados puedo ir metiendo a futuro los valores que a mi me interesen
let jugadorId = null
let enemigoId = null
let mokepones = []
let mokeponesEnemigos = []
let opcionDeMokepones
let inputHipodogue 
let inputCapipepo  
let inputRatigueya  
let inputLangostelvis  
let inputTucapalma  
let inputPydog  
let ataqueJugador = []
let ataquesMokepon
let ataqueEnemigo = []
let mascotaJugador
let mascotaJugadorObjeto
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador 
let indexAtaqueEnemigo
let ataquesMokeponEnemigo 
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./assets/mapa.webp"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos
//Generando la clase y objetos
//esta es la clase "mokepon" que cuenta con los atributos de nombre, vida  y foto
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadx = 0
        this.velocidady = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
        this.mapaFoto,
        this.x,
        this.y,
        this.alto,
        this.ancho
    );
    }
}

//de una clase existente crearemos nuevos objetos
let hipodoge = new Mokepon("Hipodogue", "./assets/conejo.png", 3, "./assets/cabezaConejo.png")
let capipepo = new Mokepon("Capipepo", "./assets/jirafa.png", 3, "./assets/cabezaJirafa.webp")
let ratigueya = new Mokepon("Ratigueya", "./assets/leon.png", 3, "./assets/cabezaLeon.png")
let langostelvis = new Mokepon("Langostelvis", "./assets/perro.png", 3, "./assets/cabezaPerro.png")
let tucapalma = new Mokepon("Tucapalma", "./assets/tiburon.png", 3, "./assets/cabezaTiburon.webp")
let pydog = new Mokepon("Pydog", "./assets/tigre.png", 3, "./assets/cabezaTigre.png")

/* */

const HIPODOGE_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🌱", id: "boton-tierra"}
]

hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const LANGOSTELVIS_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🌱", id: "boton-tierra"}
]

langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

const CAPIPEPO_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"}
]

capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const TUCAPALMA_ATAQUES= [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🌱", id: "boton-tierra"}
]

tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

const RATIGUEYA_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🌱", id: "boton-tierra"}
]

ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

const PYDOG_ATAQUES = [
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🔥", id: "boton-fuego"}, 
    {nombre: "🌱", id: "boton-tierra"}
]

pydog.ataques.push(...PYDOG_ATAQUES)



mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydog)
//con el push meteremos los mokepones dentro del let "mokepones" con corchetes cuadrado arroba en la variable global

function cargaHtml(){
    
    //haciendo un template para no tener que añadir de uno en uno si queremos nuevos mokepones en el html
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" id=${mokepon.nombre} name="mascota">
        <label for=${mokepon.nombre} class="tarjeta-de-pokemon">
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        ` 
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodogue = document.getElementById("Hipodogue")
        inputPydog = document.getElementById("Pydog")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById("Langostelvis")
        inputTucapalma = document.getElementById("Tucapalma")

    })

    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "none"
    sectionBotonReiniciar.style.display = "none"

    /*como el boton de elegir mascota ya esta anclado a la "variable" "botonMascota" 
    hacemos que haya un "listener" que esté al pendiente de que el usuario haga un "click" sobre 
    el boton y que al momento de hacerlo, ejecute la segunda funcion de seleccionar(separada por la coma despues de "click")
    que está definida al principio de este codigo*/
    botonMascota.addEventListener("click", seleccionarMascota)
    botonReiniciar.addEventListener("click", reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://192.168.1.14:8080/unirse")
        .then((res) =>{
            if(res.ok){
                res.text()
                    .then((respuesta) => {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

/*Esta funcion nos sirve para poder verificar cual casilla esta siendo marcada
al momento de tocar el boton de seleccionar mascota y mostrar en una alerta el 
nombre de la mascota seleccionada*/ 
function seleccionarMascota(){
    

    
 
/*Aca hacemos que al seleccionar la mascota, tome el nombre de la mascota con
".innerHTML" y segun vayan cambiando de mascota vaya cambiando ese texto en pantalla
cambiandole valores al inner con ".innerHTML = mascota-jugador*/
    if (inputHipodogue.checked){
        spanMascotaJugador.innerHTML = inputHipodogue.id
        mascotaJugador = inputHipodogue.id
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    }else if (inputPydog.checked){
        spanMascotaJugador.innerHTML = inputPydog.id
        mascotaJugador = inputPydog.id
    }else{
        alert("Tienes que seleccionar una mascota para continuar")
        return
    }
    sectionSeleccionarMascota.style.display = "none"

    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://192.168.1.14:8080/mokepon/${jugadorId}`, {
       method: "post", 
       headers:{
           "Content-Type": "application/json"
       },
       body: JSON.stringify({
            mokepon: mascotaJugador
       })
    })
}

function extraerAtaques(mascotaJugador){
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
       ataquesMokepon =  `
       <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
       `
       contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")

    //Selecciona todos los elementos que contengan algo
    botones = document.querySelectorAll(".BAtaque")

}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            if(ataqueJugador.length === 5){
            enviarAtaques()
            }
        })
    })
}

function enviarAtaques(){
    fetch(`http://192.168.1.14:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://192.168.1.14:8080/mokepon/${enemigoId}/ataques`)
        .then(function(res){
           if(res.ok){
            res.json()
                .then(function({ataques}){
                    if(ataques.length === 5){
                        ataqueEnemigo = ataques
                        combate()
                    }
                })
           } 
        })
}

function seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO")
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA")
    }else {
        ataqueEnemigo.push("TIERRA")
    }

    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length == 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate (){
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
       if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE EN ESTA RONDA") 
       }else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if(ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] === "FUEGO"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else if(ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] === "AGUA"){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }


    revisarVidas()
}

function crearMensaje (resultado){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    //let parrafo = document.createElement("p")
    //parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo +  " - " + resultado
   
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function revisarVidas(){
    
    if(victoriasJugador == victoriasEnemigo){
        mensajeFinJuego("ESTO FUE UN EMPATE!!!")
        sectionBotonReiniciar.style.display = "block"
        //GANAMOS
    }else if(victoriasJugador > victoriasEnemigo){
        mensajeFinJuego("FELICITACIONES GANASTE EL JUEGO!!!")
        //PERDIMOS
        sectionBotonReiniciar.style.display = "block"
    }else{
        mensajeFinJuego("MALA SUERTE, EPRDISTE :(")
        sectionBotonReiniciar.style.display = "block"
    }
}

function mensajeFinJuego (resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal

    //disabled en estado "true" desactiva los botones
}

function reiniciarJuego(){
    //Funcion y o metodo que sirve para recargar la pagina en la que estemos
    location.reload()
}



function pintarCanvas(){

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    );
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon){
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })

    
    
}

function enviarPosicion(x,y){
    fetch(`http://192.168.1.14:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res){
        if(res.ok){
            res.json()
                .then(function({ enemigos }){
                    console.log(enemigos)
                    mokeponesEnemigos = enemigos.map(function(enemigo){
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepon.nombre || ""
                        if(mokeponNombre === "Hipodoge"){
                            mokeponEnemigo = new Mokepon("Hipodogue", "./assets/conejo.png", 3, "./assets/cabezaConejo.png", enemigo.id)
                        } else if (mokeponNombre === "Capipepo"){
                            mokeponEnemigo = new Mokepon("Capipepo", "./assets/jirafa.png", 3, "./assets/cabezaJirafa.webp", enemigo.id)
                        } else if (mokeponNombre === "Ratigueya"){
                            mokeponEnemigo = new Mokepon("Ratigueya", "./assets/leon.png", 3, "./assets/cabezaLeon.png", enemigo.id)
                        } else if (mokeponNombre === "Langostelvis"){
                            mokeponEnemigo = new Mokepon("Langostelvis", "./assets/perro.png", 3, "./assets/cabezaPerro.png", enemigo.id)
                        } else if (mokeponNombre === "Tucapalma"){
                            mokeponEnemigo = new Mokepon("Tucapalma", "./assets/tiburon.png", 3, "./assets/cabezaTiburon.webp", enemigo.id)
                        } else if (mokeponNombre === "Pydog"){
                            mokeponEnemigo = new Mokepon("Pydog", "./assets/tigre.png", 3, "./assets/cabezaTigre.png", enemigo.id)
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y
                        return mokeponEnemigo
                    })  
                })
        }
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadx = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadx = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidady = 5
}
 function moverArriba(){
    mascotaJugadorObjeto.velocidady = -5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidady = 0
    mascotaJugadorObjeto.velocidadx = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowRight":
            moverDerecha()
            break
        case "ArrowLeft":
            moverIzquierda()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mapa.width = 320
    mapa.height = 240
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i =0; i< mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre){
            return mokepones[i]
        }
        
    }
}
 
function revisarColision(enemigo){
const arribaEnemigo = enemigo.y
const abajoEnemigo = enemigo.y + enemigo.alto
const derechaEnemigo = enemigo.x + enemigo.ancho
const izquierdaEnemigo = enemigo.x

const arribaMascota = 
    mascotaJugadorObjeto.y
const abajoMascota = 
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
const derechaMascota = 
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
const izquierdaMascota = 
    mascotaJugadorObjeto.x

    if(abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo){
            return;
        }
    detenerMovimiento()
    clearInterval(intervalo)
    
    enemigoId = enemigo.id

    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    //alert("Hay colisión con: " + enemigo.nombre) 
    seleccionarMascotaEnemigo(enemigo)
}


    /*Esto se realiza para que cuando ya haya cargado todo el html, nos cargue 
    instantaneamente todo el codigo de javascript y que no hayan errores posteriormente
    debido a que se carga primero el codigo de javascript pero no el de html dentro de js*/
    window.addEventListener("load", cargaHtml) 