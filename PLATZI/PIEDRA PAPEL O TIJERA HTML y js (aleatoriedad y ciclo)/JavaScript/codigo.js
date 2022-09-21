            //math.floor quita decimales
            //math.random genera un numero random entre 0 y 1 en decimales
            /*en la function "aleatorio" generamos un numero random (0.1, 0.5, 0.9, etc) que luego se multiplicara por el maximo (0.3, 1.5, 2.7) 
            para despues sumarle "1" (1.3, 2.5, 3.7) y como todo esto está dentro de una propiedad "Math.floor" que se encarga de 
            eliminar los decimales solo nos quedarian (1, 2, 3) que es el maximo de opciones (piedra, papel, tijera)*/
            function aleatorio(min, max){
                return Math.floor(Math.random()*(max-min+1)+min)
            }
            //Declaramos una funcion para que el pc y nosotros escojamos entre piedra, papel o tijera (se hizo en funcion para hacer mas corto el codigo)
            function eleccion(jugada){
                let resultado = ""
                if(jugada == 1){
                    resultado = "Piedra 🥌"
                }else if(jugada == 2){
                    resultado = "Papel 📄"
                }else if(jugada == 3){
                    resultado = "Tijera ✂"
                }else {
                    resultado = "MAL ELEGIDO"
                }
                return resultado
            }
            //1 es piedra
            //2 es papel
            //3 es tijera
            let jugador = 0
            //el 1 y 3 son el min y max de la function aleatorio
            let pc = 0
            let triunfos = 0
            let perdidas = 0

            while(triunfos < 3 && perdidas < 3){
                pc = aleatorio (1,3)
                jugador = prompt("Elije entre 1 que es piedra, 2 que es papel y 3 que es Tijera")
            
                //Invocamos la funcion "eleccion" en una alerta para poder esocger entre piedra, papel o tijera 
                alert("Pc elige: " + eleccion(pc))
                alert("Tu eliges: " + eleccion(jugador))

                //COMBATE
                    if (pc == jugador){
                        alert("El resultado es: EMPATE")
                    }else if ((jugador ==1 && pc == 3)||(jugador ==2 && pc == 1)||(jugador ==3 && pc == 2)) {
                        alert("El resultado es: GANASTE")
                        triunfos = triunfos +1
                    }else {
                        alert("El resultado es: PERDISTE")
                        perdidas = perdidas +1
                    }
            }

            alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
            
            