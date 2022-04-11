class Artista{
    constructor(nombreArtista, descripcionArtista, imgArtista, spotifyArtista){
        this.nombreArtista = nombreArtista;
        this.descripcionArtista = descripcionArtista;
        this.imgArtista = imgArtista;
        this.spotifyArtista = spotifyArtista;
    }
   

}

let listaArtistas = new Array();

leerLocalStorageAdmin();

function insertarArtista(){

       
      
        let nombreInput = document.getElementById("nombreInput").value;
        let descInput = document.getElementById("descInput").value;
        let imgInput = document.getElementById("imgInput");
        let rutaIMg = "../SRC/IMG/"+ imgInput.files[0].name;
        let spotifyInput = document.getElementById("spotifyInput").value;
        let contArtista = document.getElementById("contArtista");
        const newArtista = new Artista(nombreInput,descInput,rutaIMg,spotifyInput);
    
        contArtista.innerHTML += `<div class="artista" id="${listaArtistas.length}"><div class="nombreArtista"><h1>${newArtista.nombreArtista}</h1></div><div class="icono"><img src="../SRC/IMG/edit.png" alt="Editar" onclick="abrirVentanaEditarArtista(this)"><img src="../SRC/IMG/garbage.png" alt="Borrar" onclick="abrirVentanaBorrarArtista(this)"></div></div>`;
        listaArtistas.push(newArtista);
        console.log(listaArtistas);


            
        

        guardarLocalStorage();
        cerrarVentana();
   
}



// function editarArtista(){
//     let index = cont.parentNode.parentNode.id;

    
//     return index;
// }


let overlay = document.getElementById('overlay');
let	popup = document.getElementById('popup');
let overlay2 = document.getElementById('overlay2');
let	popup2 = document.getElementById('popup2');
let idArtista = 0;  

function abrirVentanaEditarArtista(cont){

    //PARA QUE EL BOTON CAMBIE A INVOCAR ACEPTAR CAMBIO ARTISTA
    let cambioBoton = document.getElementById("botonContinuar");
    cambioBoton.setAttribute("onclick","aceptarCambioArtista()");

    idArtista = cont.parentNode.parentNode.id;
    document.getElementById("nombreInput").value = listaArtistas[idArtista].nombreArtista;
    document.getElementById("descInput").value = listaArtistas[idArtista].descripcionArtista;
    document.getElementById("spotifyInput").value = listaArtistas[idArtista].spotifyArtista;
    document.getElementById("imgInput").value = null;
    // document.getElementById("imgInput").value = listaArtistas[idArtista].imgArtista;
    overlay.classList.add('active');
	popup.classList.add('active');
    
    console.log(idArtista);

}

function abrirVentanaInsertarArtista(){
    //PARA QUE EL BOTON CAMBIE A INVOCAR INSERTAR ARTISTA
    let cambioBoton = document.getElementById("botonContinuar");
    cambioBoton.setAttribute("onclick","insertarArtista()");
    //Limpiar inputs
    document.getElementById("nombreInput").value = "";
    document.getElementById("descInput").value = "";
    document.getElementById("spotifyInput").value = "";
    document.getElementById("imgInput").value = null;

    overlay.classList.add('active');
	popup.classList.add('active');
}
function abrirVentanaBorrarArtista(cont){

    idArtista = cont.parentNode.parentNode.id;
    overlay2.classList.add('active');
	popup2.classList.add('active');
}

function borrarArtista(){

    let artistahtml = document.getElementsByClassName('artista');
    artistahtml[idArtista].remove(); //Borrar html
    listaArtistas.splice(idArtista, 1); //Borrar de la lista de artistas
    console.log(listaArtistas) 

    //PARA QUE EL ID SE ACTUAlICE COMO EL ARRAY TOCA RECARGAR LA PAGINA :V
    guardarLocalStorage();
    location.reload();

}

function aceptarCambioArtista(){

    listaArtistas[idArtista].nombreArtista = document.getElementById("nombreInput").value;
    listaArtistas[idArtista].descripcionArtista = document.getElementById("descInput").value;

    let rutaIMg;
    try {
        let imgInput = document.getElementById("imgInput");
        rutaIMg = "../SRC/IMG/"+ imgInput.files[0].name;
       
    } catch (error) {
        console.log("Error")
        rutaIMg = listaArtistas[idArtista].imgArtista;

    }
   

    listaArtistas[idArtista].imgArtista = rutaIMg;
    
    listaArtistas[idArtista].spotifyArtista = document.getElementById("spotifyInput").value;




    guardarLocalStorage();
    location.reload();
}

function cerrarVentana(){

    overlay.classList.remove('active');
	popup.classList.remove('active');
    overlay2.classList.remove('active');
	popup2.classList.remove('active');
}




function guardarLocalStorage(){ 

    localStorage.setItem("Artista", JSON.stringify(listaArtistas));

}

function leerLocalStorageAdmin(){


  //  try {

        listaArtistas = JSON.parse(localStorage.getItem("Artista"));
       ;
    if(listaArtistas == null){

        listaArtistas = new Array(0);
        console.log(listaArtistas)

    }else{
        for(let i = 0; i < listaArtistas.length; i++){

            contArtista.innerHTML += `<div class="artista" id="${i}"><div class="nombreArtista"><h1>${listaArtistas[i].nombreArtista}</h1></div><div class="icono"><img src="../SRC/IMG/edit.png" alt="Editar" onclick="abrirVentanaEditarArtista(this)"><img src="../SRC/IMG/garbage.png" alt="Borrar" onclick="abrirVentanaBorrarArtista(this)"></div></div>`; 
           
         }
    }
        
    // } catch (error) {
    //     console.log("Error")
    // }
    

}