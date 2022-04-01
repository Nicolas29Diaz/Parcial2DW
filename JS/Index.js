class Artista{
    constructor(nombreArtista, descripcionArtista, imgArtista, spotifyArtista){
        this.nombreArtista = nombreArtista;
        this.descripcionArtista = descripcionArtista;
        this.imgArtista = imgArtista;
        this.spotifyArtista = spotifyArtista;
    }
}


function insertarArtista(){
    //Obtener Valores
    let nombreInput = document.getElementById("nombreInput").value;
    let descInput = document.getElementById("descInput").value;
    let imgInput = document.getElementById("imgInput").value;
    let spotifyInput = document.getElementById("spotifyInput").value;

    //Contenedor Principal
    let contArtista = document.getElementById("contArtista");

    const newArtista = new Artista(nombreInput,descInput,imgInput,spotifyInput);
    
    contArtista.innerHTML += `<div id="artista1" class="artista"><div><img src="${newArtista.imgArtista}" alt=""></div><div><p><h1>${newArtista.nombreArtista}</h1><br>${newArtista.descripcionArtista}</p></div><div>${spotifyInput}</div></div>`

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
