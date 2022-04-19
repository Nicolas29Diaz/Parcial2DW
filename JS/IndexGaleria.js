let listaGaleria = new Array();

let contGaleria = document.getElementById("contGaleria");

leerLocalStorageUsuario();
function leerLocalStorageUsuario(){

    listaGaleria = JSON.parse(localStorage.getItem("Galeria"));

    console.log(listaGaleria);

    if(listaGaleria.length != 0){
        for(let i = 0; i < listaGaleria.length; i++){

            contGaleria.innerHTML += `<div class="galeria"><div class="contImg"><img class="imagen" src="${listaGaleria[i].imgGaleria}" alt=""></div><div class="contDesc"><h1>${listaGaleria[i].titulo}</h1></div></div>`

        }
    }else{
        console.log("Nada")
    }
    
}