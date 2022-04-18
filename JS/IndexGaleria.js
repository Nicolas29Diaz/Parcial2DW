let listaArtistas = new Array();
leerLocalStorageUsuario();

function leerLocalStorageUsuario(){

    listaArtistas = JSON.parse(localStorage.getItem("Artista"));
    console.log(listaArtistas);
    if(listaArtistas.length != 0){
        for(let i = 0; i < listaArtistas.length; i++){

            contArtista.innerHTML += `<div class="artista"><div class="contImg"><img class="imagen" src="${listaArtistas[i].imgArtista}" alt=""></div><div class="contDesc"><h1>${listaArtistas[i].nombreArtista}</h1></div></div>`

        }
    }else{
        console.log("Nada")
    }
    
}