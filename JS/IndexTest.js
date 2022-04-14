//Puede haber una forma para guardar las preguntas sin ocupar codigo
const preguntas = [

    {
        pregunta: "¿Cuál es el nombre real de BAD BUNNY?",
        respuestasIncorrectas: ["Juan Luis Londoño Arias", ".Nick Rivera Caminero", "William Omar Landrón Rivera"],
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
        pregunta: "¿Pregunta 6?",
        respuestasIncorrectas: ["The World Tour", "The Big Boss", "La Gasolina Tour"],
        respuestaCorrecta:["La Última Vuelta Tour"]       
    },
    {
        pregunta: "¿Pregunta 7?",
        respuestasIncorrectas: ["The World Tour", "The Big Boss", "La Gasolina Tour"],
        respuestaCorrecta:["La Última Vuelta Tour"]       
    },
    {
        pregunta: "¿Pregunta 8?",
        respuestasIncorrectas: ["The World Tour", "The Big Boss", "La Gasolina Tour"],
        respuestaCorrecta:["La Última Vuelta Tour"]       
    },
    {
        pregunta: "¿Pregunta 9?",
        respuestasIncorrectas: ["The World Tour", "The Big Boss", "La Gasolina Tour"],
        respuestaCorrecta:["La Última Vuelta Tour"]       
    },
    {
        pregunta: "¿Pregunta 10?",
        respuestasIncorrectas: ["The World Tour", "The Big Boss", "La Gasolina Tour"],
        respuestaCorrecta:["La Última Vuelta Tour"]       
    }
  

]

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
preguntar();

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
  
    if(contPreguntas == cantidadPreg){
        console.log("FIN")
        acabarTest();
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
          console.log(contPreguntas)
        }
    }
    
   
    
}

function botonOprimido(i){

    if(juntarRespuestas[i] == preguntas[indexPregunta].respuestaCorrecta[0]){
        console.log("Correcto");
        resCorrectas++;
        getDocumet("resBuenas").innerHTML = resCorrectas;
        retroalimentacion = "Correcto!";
        abrirVentana();
    }else{
        resIncorrectas++;
        getDocumet("resMalas").innerHTML = resIncorrectas;
        console.log("Mala");
        if(cantidadMaxMalas == resIncorrectas){
            console.log("Perdiste")
            retroalimentacion = "Perdiste";
            acabarTest();

        }else{
            retroalimentacion = "Incorrecto";
            abrirVentana();
        }
        
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
}

function getDocumet(id){
    return document.getElementById(id);
}


function acabarTest(){

    cerrarVentana();
    if(cantidadMaxMalas == resIncorrectas){
        document.getElementById("retroalimentacion").innerHTML = "Incorrecto,Perdiste";
    }else{
        document.getElementById("retroalimentacion").innerHTML = "Felicitaciones!Redime tu codigo de descuento";     
    }

    let cambioBoton = document.getElementById("botonContinuar");
        cambioBoton.innerHTML = "Reiniciar"
        cambioBoton.setAttribute("onclick","reiniciarTest()");
        
        overlay.classList.add('active');
        popup.classList.add('active');
    

}

function reiniciarTest(){
    location.reload();
}