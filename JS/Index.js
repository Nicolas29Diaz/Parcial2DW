class Artista{
    constructor(nombreArtista, descripcionArtista, imgArtista, spotifyArtista){
        this.nombreArtista = nombreArtista;
        this.descripcionArtista = descripcionArtista;
        this.imgArtista = imgArtista;
        this.spotifyArtista = spotifyArtista;
    }
    // htmlArtista(){
    //     console.log("Artista: " + this.nombreArtista);

    //     let contArtista = document.getElementById("contArtista");
    //     contArtista.innerHTML += `<div id="artista1" class="artista"><div><img class="imagen" src="${this.imgArtista}" alt=""></div><div><p><h1>${this.nombreArtista}</h1><br>${this.descripcionArtista}</p></div><div>${this.spotifyArtista}</div></div>`

    // }
}

//Lista de artistas
let listaArtistas = new Array();

function insertarArtista(){
    //Obtener Valores
    let nombreInput = document.getElementById("nombreInput").value;
    let descInput = document.getElementById("descInput").value;
    let imgInput = document.getElementById("imgInput").value;
    let spotifyInput = document.getElementById("spotifyInput").value;

    //Contenedor Principal
    let contArtista = document.getElementById("contArtista");

    const newArtista = new Artista(nombreInput,descInput,imgInput,spotifyInput);
    //newArtista.htmlArtista();
    
    contArtista.innerHTML += `<div id="artista1" class="artista"><div><img class="imagen" src="${imgInput}" alt=""></div><div><p><h1>${newArtista.nombreArtista}</h1><br>${newArtista.descripcionArtista}</p></div><div>${spotifyInput}</div></div>`

    listaArtistas.push(new Artista(nombreInput,descInput,imgInput,spotifyInput));
    console.log(listaArtistas);


}

//Para practiar, lo que se puede hacer es hacer una funcion para buscar que devuelva el "i" y asi se ahorra lineas de codigo
function cambiarImagenArtista(){

    let nombreInput = document.getElementById("nombreInput").value;
    let imgInput = document.getElementById("imgInput").value;

    let busquedaArtista = false;
    
    let imghtml = document.getElementsByClassName('imagen');
  
    for(let i=0;i < listaArtistas.length;i++){

        if(listaArtistas[i].nombreArtista.toUpperCase() == nombreInput.toUpperCase()){
            console.log(`El artista ${listaArtistas[i].nombreArtista} se encuentra disponible`);
            busquedaArtista = true;

            listaArtistas[i].imgArtista = imgInput;
            console.log(listaArtistas)
            
            // listaArtistas[i].htmlArtista(); aca lo que hace es crear otro html
            
            /console.log(imghtml[i].src);
            imghtml[i].src = imgInput;

        }
    }

    if(!busquedaArtista){
        console.log(`El artista ${nombreInput} no se encuentra disponible`);
    }

}

function borrarArtista(){

    let nombreInput = document.getElementById("nombreInput").value;
    let imgInput = document.getElementById("imgInput").value;

    let busquedaArtista = false;
    
    let artistahtml = document.getElementsByClassName('artista');
  
    for(let i=0;i < listaArtistas.length;i++){

        if(listaArtistas[i].nombreArtista.toUpperCase() == nombreInput.toUpperCase()){
            console.log(`El artista ${listaArtistas[i].nombreArtista} se encuentra disponible`);
            busquedaArtista = true;

            listaArtistas[i].imgArtista = imgInput;
           
        
            artistahtml[i].remove();

            listaArtistas.splice(i, 1); //Borrar de la lista de artistas

            console.log(listaArtistas) //Borrar html

            //Aun no se como funciona el localhost, pero en teoria deberia pasarsele la lista de Artistas
        }
    }

    if(!busquedaArtista){
        console.log(`El artista ${nombreInput} no se encuentra disponible`);
    }

}




//Tambien sirve pero ps mas largo, no se que prefiera el profesor
function insertarArtista2(){
    //Obtener Valores
    let nombreInput = document.getElementById("nombreInput").value;
    let descInput = document.getElementById("descInput").value;
    let imgInput = document.getElementById("imgInput").value;
    let spotifyInput = document.getElementById("spotifyInput").value;

    //Crear HTML
    //Contenedor Principal
    let contArtista = document.getElementById("contArtista");

    //Grid de cada artista
    let divArtista = document.createElement("div");
    divArtista.setAttribute("class","artista")
    contArtista.appendChild(divArtista);

    //Imagen dentro del grid
    let divImg = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",imgInput)
    divArtista.appendChild(divImg);
    divImg.appendChild(img);

    //Descripcion dentro del grid
    let divDesc = document.createElement("div");
    let parrafo = document.createElement("p");
    divArtista.appendChild(divDesc);
    divDesc.appendChild(parrafo);
    parrafo.innerHTML = `<h1>${nombreInput}</h1>${descInput}`;

    //SpotyList dentro del grid
    let divSpoty = document.createElement("div");
    divArtista.appendChild(divSpoty);
    divSpoty.innerHTML = spotifyInput;
    

    const newArtista = new Artista(nombreInput,descInput,imgInput,spotifyInput);

    console.log(`Nombre ${newArtista.nombreArtista} Desc ${newArtista.descripcionArtista} `); 

}
