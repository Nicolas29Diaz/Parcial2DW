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

let listaArtistas = new Array();

function buscarArtista(){
    
    let nombreInput = document.getElementById("nombreInput").value;
    let busquedaArtista = false;
    let index;
    for(let i=0;i < listaArtistas.length;i++){

        if(listaArtistas[i].nombreArtista.toUpperCase() == nombreInput.toUpperCase()){
            console.log(`El artista ${listaArtistas[i].nombreArtista} se encuentra disponible`);
            busquedaArtista = true;
            console.log(listaArtistas)
            index = i;
        }
    }
    if(!busquedaArtista){
        console.log(`El artista ${nombreInput} no se encuentra disponible`);
    }

    return [index, busquedaArtista];
}

function insertarArtista(){

    let artistaEncontrado = buscarArtista()[1];
    if(artistaEncontrado){

        console.log("El artista ya existe")

    }else{
      
        let nombreInput = document.getElementById("nombreInput").value;
        let descInput = document.getElementById("descInput").value;
        let imgInput = document.getElementById("imgInput").value;
        let spotifyInput = document.getElementById("spotifyInput").value;
        let contArtista = document.getElementById("contArtista");
        const newArtista = new Artista(nombreInput,descInput,imgInput,spotifyInput);

        contArtista.innerHTML += `<div class="artista"><div><img class="imagen" src="${imgInput}" alt=""></div><div><p><h1>${newArtista.nombreArtista}</h1><br>${newArtista.descripcionArtista}</p></div><div>${spotifyInput}</div></div>`;

        listaArtistas.push(newArtista);
        console.log(listaArtistas);

    }

}

function cambiarImagenArtista(){ 

    let imgInput = document.getElementById("imgInput").value;
    let imghtml = document.getElementsByClassName('imagen');
    let i = buscarArtista()[0];
    listaArtistas[i].imgArtista = imgInput;
    imghtml[i].src = imgInput;

}

function borrarArtista(){

    let artistahtml = document.getElementsByClassName('artista');
    let i = buscarArtista()[0];
    artistahtml[i].remove(); //Borrar html
    listaArtistas.splice(i, 1); //Borrar de la lista de artistas
    console.log(listaArtistas) 

}

function guardarLocalStorage(){ 

    localStorage.setItem("Artista", JSON.stringify(listaArtistas));

}

function leerLocalStorage(){

    listaArtistas = JSON.parse(localStorage.getItem("Artista"));

    for(let i = 0; i < listaArtistas.length; i++){

        contArtista.innerHTML += `<div class="artista"><div><img class="imagen" src="${listaArtistas[i].imgArtista}" alt=""></div><div><p><h1>${listaArtistas[i].nombreArtista}</h1><br>${listaArtistas[i].descripcionArtista}</p></div><div>${listaArtistas[i].spotifyArtista}</div></div>`

    }
    
}

function consolazo(){
    console.log(listaArtistas);
}
leerLocalStorage(); //Al parecer el localstorage cambia dependiendo el navegador


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