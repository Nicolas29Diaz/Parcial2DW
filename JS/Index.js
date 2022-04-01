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
    parrafo.innerHTML = descInput;

    //SpotyList dentro del grid
    let divSpoty = document.createElement("div");
    divArtista.appendChild(divSpoty);
    divSpoty.innerHTML = "Aquí de alguna manera irá la lista de spoty";
    

    const newArtista = new Artista(nombreInput,descInput,imgInput,spotifyInput);

    console.log(`Nombre ${newArtista.nombreArtista} Desc ${newArtista.descripcionArtista} `);
}