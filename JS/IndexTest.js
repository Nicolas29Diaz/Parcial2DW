//Puede haber una forma para guardar las preguntas sin ocupar codigo
const preguntas = [

    {
        pregunta: "¿Cuál es el nombre real de BAD BUNNY?",
        respuestasIncorrectas: ["Juan Luis Londoño Arias", "Nick Rivera Caminero", "William Omar Landrón Rivera"],
        respuestaCorrecta:["Benito Antonio Martínez Ocasio"]
    },
    {
        pregunta: "¿Cuál de estos artistas latinos han alcanzado un Grammy?",
        respuestasIncorrectas: ["J Alvarez", "Paola Jara", "Sebastian Yatra"],
        respuestaCorrecta:["Juanes"]       
    },
    {
        pregunta: "¿Qué Artista femenina del genero urbano, se encuentra en embarazo?",
        respuestasIncorrectas: ["Karol G", "Natti Natasha", "Baby G"],
        respuestaCorrecta:["Greeicy Rendon"]       
    },
    {
        pregunta: "¿Con que famoso se encuentra casada Shakira?",
        respuestasIncorrectas: ["Silvestre Dangon", "Rafael Novoa", "Rafael Nadal"],
        respuestaCorrecta:["Gerard piqué"]       
    },
    {
        pregunta: "¿Cúal es el nombre de la ultima gira de Daddy Yankee?",
        respuestasIncorrectas: ["The World Tour", "The Big Boss", "La Gasolina Tour"],
        respuestaCorrecta:["La Última Vuelta Tour"]       
    },
    {
        pregunta: "¿En que año, Romeo Santos, vocalista de la agrupación Aventura, decide separarse y lanzarse como solista?",
        respuestasIncorrectas: ["2021", "2000", "2018"],
        respuestaCorrecta:["2011"]       
    },
    {
        pregunta: "¿Cuáles son los nombres de los integrantes de Los Tigres del Norte?",
        respuestasIncorrectas: ["Juan, Camilo, David", "Daniel, David, Dario", "Juan y Daniel"],
        respuestaCorrecta:["Luis, Hernán, Jorge y Eduardo Hernández y Oscar Lara"]       
    },
    {
        pregunta: "¿Cuántas temporadas ha estado Andres Cepeda, como jurado del programa LA VOZ COLOMBIA?",
        respuestasIncorrectas: ["8  Temporadas", "10  Temporadas", "5  Temporadas"],
        respuestaCorrecta:["6  Temporadas"]       
    },
    {
        pregunta: "¿Cuál es la fecha de nacimiento de Jhonny Rivera?",
        respuestasIncorrectas: ["26 de Febrero de 1984", "2 de Marzo de 1974", "29 de Febrero de 1964"],
        respuestaCorrecta:["23 de Febrero de 1974"]       
    },
    {
        pregunta: "¿Cuál es el nombre de la pelicula donde participa Luis Alberto Posada?",
        respuestasIncorrectas: ["El Paseo 3", "Nuevo rico, Nuevo pobre", "Escobar el patron del mal"],
        respuestaCorrecta:["El rey del sapo"]       
    }
  

]
class HighScore{
    constructor(nombreUsuario, score, tiempo){
        this.nombreUsuario = nombreUsuario;
        this.score = score;
        this.tiempo = tiempo;
    }
}

let score = new Array();
score = new Array(0)
leerLocalStorageHighScore()
let pararTiempo = false;
let seg = 0;
let min = 0;
let tiempoTotalFinal;
let temporizador = getDocumet("temporizador");
let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let codigoCupon;
let resCorrectas = 0;
let resIncorrectas = 0;
let cantidadPreg = preguntas.length;
console.log(cantidadPreg);
let cantidadMaxMalas = 3;
let retroalimentacion;
let juntarRespuestas;
let preguntasHechas = new Array();
preguntasHechas = new Array(0)
let indexPregunta;
let contPreguntas = 0;
let rellenoBarra = 0;
let overlay = document.getElementById('overlay');
let	popup = document.getElementById('popup');
let overlay2 = document.getElementById('overlay2');
let	popup2 = document.getElementById('popup2');
preguntar();
getDocumet("resMalas").innerHTML = `${resIncorrectas}`;
getDocumet("resBuenas").innerHTML = `${resCorrectas}/10`;


function verificarQueNoSeRepita(){
    let bool;

    for(let i = 0; i<preguntasHechas.length;i++){
        if(preguntasHechas[i] == indexPregunta){
            bool = true;
            break;
        }else{
            bool = false;
        }
    }

    console.log(bool)
    return bool;
    
}

function preguntar(){
  
    if(contPreguntas == 10){
            getDocumet("rellenoBarraProgreso").style.width = `${rellenoBarra}%`;
          
          if(rellenoBarra == 100){
            getDocumet("rellenoBarraProgreso").style.borderRadius = `10px`;
          }
          rellenoBarra += 10;
        console.log("FIN")
        pararTiempo = true;
        ingresarNombre();


    }else{
        indexPregunta = Math.floor(Math.random() * preguntas.length);

        if(verificarQueNoSeRepita()){
           preguntar();
        }else{
    
           preguntasHechas.push(indexPregunta);
    
           console.log(preguntasHechas);
           
          juntarRespuestas = [
              preguntas[indexPregunta].respuestasIncorrectas[0],
              preguntas[indexPregunta].respuestasIncorrectas[1],
              preguntas[indexPregunta].respuestasIncorrectas[2],
              preguntas[indexPregunta].respuestaCorrecta[0]
      
          ]
          
          juntarRespuestas.sort(function() {return Math.random()-0.5});
          
          getDocumet("pregunta").innerHTML = preguntas[indexPregunta].pregunta;
          getDocumet("res1").innerHTML = juntarRespuestas[0];
          getDocumet("res2").innerHTML = juntarRespuestas[1];
          getDocumet("res3").innerHTML = juntarRespuestas[2];
          getDocumet("res4").innerHTML = juntarRespuestas[3];
      
          cerrarVentana();    
          contPreguntas++;
          getDocumet("rellenoBarraProgreso").style.width = `${rellenoBarra}%`;
          if(rellenoBarra == 100){
            getDocumet("rellenoBarraProgreso").style.borderRadius = `15px`;
          }
          rellenoBarra += 10;
          console.log(contPreguntas)
        }
    }
    
}

function botonOprimido(i){

    if(juntarRespuestas[i] == preguntas[indexPregunta].respuestaCorrecta[0]){
        console.log("Correcto");
        resCorrectas++;
        
        retroalimentacion = "Correcto!";
        abrirVentana();
        getDocumet("resBuenas").innerHTML = `${resCorrectas}/10`;
    }else{
        resIncorrectas++;
        getDocumet("resMalas").innerHTML = `${resIncorrectas}`;
        console.log("Mala");
        // if(cantidadMaxMalas == resIncorrectas){ //Esto era para perder con x malas
        //     console.log("Perdiste")
        //     retroalimentacion = "Perdiste";
        //     acabarTest();

        // }else{
            retroalimentacion = "Incorrecto";
            abrirVentana();
        //}
        
    }
    
}

function abrirVentana(){

    document.getElementById("retroalimentacion").innerHTML = retroalimentacion;
    overlay.classList.add('active');
	popup.classList.add('active');
    

}

function cerrarVentana(){

    overlay.classList.remove('active');
	popup.classList.remove('active');

    overlay2.classList.remove('active');
	popup2.classList.remove('active');
}

function getDocumet(id){
    return document.getElementById(id);
}

function acabarTest(){

    
    let nombre = getDocumet("nombreInput").value;
    //Me tocó validar a la antigua
    if(nombre == ""){

    }else{

        let newScore = new HighScore(nombre,resCorrectas,tiempoTotalFinal)
        score.push(newScore);
        console.log(score);
    
        guardarLocalStorageHighScore();
    
        cerrarVentana();
    
    
        if(resIncorrectas == 0){
            generarCupon();
            document.getElementById("retroalimentacion").innerHTML = "Felicitaciones! Redime tu codigo de descuento:<br><br>" + codigoCupon;
    
        }else{
    
            document.getElementById("retroalimentacion").innerHTML = "Debes responder todas las preguntas correctamente para recibir el cupón";
    
        }
        
        let cambioBoton = document.getElementById("botonContinuar");
            cambioBoton.innerHTML = "Reiniciar"
            cambioBoton.setAttribute("onclick","reiniciarTest()");
            
            overlay.classList.add('active');
            popup.classList.add('active');
        
    }
   

}

function ingresarNombre(){

    cerrarVentana();

    overlay2.classList.add('active');
    popup2.classList.add('active');


    let cambioBoton = document.getElementById("botonContinuar2");
    cambioBoton.innerHTML = "Continuar"
    cambioBoton.setAttribute("onclick","acabarTest()");
    


}

function reiniciarTest(){
    location.reload();
}

function generarCupon(){

    codigoCupon = "";

    for(let i = 0; i < 10; i++){

        codigoCupon += letras[Math.floor(Math.random()*62)];
        
    }
    
    console.log(codigoCupon);
    guardarLocalStorageCupon()
   return codigoCupon;
}

function guardarLocalStorageCupon(){ 

    localStorage.setItem("Cupon", JSON.stringify(codigoCupon));

}

window.setInterval(function(){  
	
    if(pararTiempo){
        
      
    }else{

        if(seg >= 10)
        {
            temporizador.innerHTML = min + ":" + seg;
            tiempoTotalFinal = min + ":" + seg;
        
        }else
        {
            temporizador.innerHTML = min + ":0" + seg;
            tiempoTotalFinal = min + ":0" + seg;
        }
            seg++;
    
        if(seg ==60)
        {
        min++;
        seg=0;
        }
    }
    
    
	

},1000);

function guardarLocalStorageHighScore(){ 

    localStorage.setItem("Scores", JSON.stringify(score));

}

function leerLocalStorageHighScore(){

    score = JSON.parse(localStorage.getItem("Scores"));
    console.log(score);

    if(score == null){

        score = new Array(0);
        console.log(score)

    }else{

        score.sort(function(o1,o2) 
        {
            if(o1.score > o2.score){
                return -1;
            }else if(o1.score < o2.score){
                return 1;
            }else{

                if(o1.tiempo > o2.tiempo){
                    return 1;
                }else if(o1.tiempo < o2.tiempo){
                    return -1;
                }else{
                    return 0;
                }
               
            }
            
        })
        console.log(score)
       
        //Los cinco primeros y ya 
        for(let i = 0; i < score.length; i++){

            getDocumet("contenedorScore").innerHTML += `<div class="score"><p>${i+1}</p><p>${score[i].nombreUsuario}</p><p>${score[i].score*10}</p><p>${score[i].tiempo}</p></div>`;

        }

    }


}