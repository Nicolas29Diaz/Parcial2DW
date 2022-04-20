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
        if(nombreInput == ""){
            
            swal("Debe ingresar el nombre del artista","","error");
        }else{

            let rutaIMg;
            try {
                let imgInput = document.getElementById("imgInput");
                rutaIMg = "../SRC/IMG/"+ imgInput.files[0].name;
                let spotifyInput = document.getElementById("spotifyInput").value;
                let contArtista = document.getElementById("contArtista");
                const newArtista = new Artista(nombreInput,descInput,rutaIMg,spotifyInput);
            
                contArtista.innerHTML += `<div class="artista" id="${listaArtistas.length}"><div class="nombreArtista"><h1>${newArtista.nombreArtista}</h1></div><div class="icono"><img src="../SRC/IMG/edit.png" alt="Editar" onclick="abrirVentanaEditarArtista(this)"><img src="../SRC/IMG/garbage.png" alt="Borrar" onclick="abrirVentanaBorrarArtista(this)"></div></div>`;
                listaArtistas.push(newArtista);
                console.log(listaArtistas);
            
            guardarLocalStorage();
            cerrarVentana();
            
            } catch (error) {
                console.log("Error")
                rutaIMg = "";
                swal("Debe ingresar la imagen del artista","","error");

            }
            

        }
   
}


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

    if(document.getElementById("nombreInput").value == ""){
        swal("Debe ingresar el nombre del artista","","error");
    }else{

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

// GALERIA 

class Galeria{
    constructor(titulo, imgGaleria, alternativeText){
        this.titulo = titulo;
        this.imgGaleria = imgGaleria;
        this.alternativeText = alternativeText;
    }
   

}

let listaGaleria = new Array();

leerLocalStorageAdminGaleria();

function insertarImagen(){

       
      
        let tituloInput = document.getElementById("tituloInput").value;
        let alternative = document.getElementById("textAlt").value;

               if(tituloInput == "" || alternative == ""){
            
            swal("Debe ingresar el titulo y el texto alternativo","","error");
        }else{

            let rutaIMgg;
             try {
                let imgInput = document.getElementById("imgInput2");
                rutaIMgg = "../SRC/IMG/"+ imgInput.files[0].name;
               
                let contGaleria = document.getElementById("contGaleria");
                const newImg = new Galeria(tituloInput,rutaIMgg,alternative);
            
                contGaleria.innerHTML += `<div class="Galeria" id="${listaGaleria.length}"><div class="titulo"><h1>${newImg.titulo}</h1></div><div class="icono"><img src="../SRC/IMG/edit.png" alt="Editar" onclick="abrirVentanaEditarGaleria(this)"><img src="../SRC/IMG/garbage.png" alt="Borrar" onclick="abrirVentanaBorrarGaleria(this)"></div></div>`;

        
                listaGaleria.push(newImg);
                console.log(listaGaleria);
            

            guardarLocalStorageGaleria();
            cerrarVentanaG();
            location.reload();

            
            } catch (error) {
                console.log("Error")
                rutaIMgg = "";
                swal("Debe ingresar una imagen","","error");

            }
            

        }
   
}


let overlayG = document.getElementById('overlayG');
let	popupG = document.getElementById('popupG');
let overlayG2 = document.getElementById('overlayG2');
let	popupG2 = document.getElementById('popupG2');
let idGaleria = 0;  

function abrirVentanaEditarGaleria(cont){

    //PARA QUE EL BOTON CAMBIE A INVOCAR ACEPTAR CAMBIO Galeria
    let cambioBoton = document.getElementById("botonContinuarG");
    cambioBoton.setAttribute("onclick","aceptarCambioGaleria()");

    idGaleria = cont.parentNode.parentNode.id;
    document.getElementById("tituloInput").value = listaGaleria[idGaleria].titulo;
    document.getElementById("imgInput2").value = null;
    document.getElementById("textAlt").value = listaGaleria[idGaleria].alternativeText;
   
    overlayG.classList.add('active');
	popupG.classList.add('active');
    
    console.log(idGaleria);

}

function abrirVentanaInsertarGaleria(){
    //PARA QUE EL BOTON CAMBIE A INVOCAR INSERTAR Galeria
    let cambioBoton = document.getElementById("botonContinuarG");
    cambioBoton.setAttribute("onclick","insertarImagen()");

    //Limpiar inputs
    document.getElementById("tituloInput").value = "";
    document.getElementById("imgInput").value = null;
    overlayG.classList.add('active');
	popupG.classList.add('active');

}
function abrirVentanaBorrarGaleria(cont){

    idGaleria = cont.parentNode.parentNode.id;
    overlayG2.classList.add('active');
	popupG2.classList.add('active');
}

function borrarGaleria(){

    let galeriahtml = document.getElementsByClassName('galeria');
    galeriahtml[idGaleria].remove(); //Borrar html
    listaGaleria.splice(idGaleria, 1); //Borrar de la lista de galerias
    console.log(listaGaleria) 

    //PARA QUE EL ID SE ACTUAlICE COMO EL ARRAY TOCA RECARGAR LA PAGINA :V
    guardarLocalStorageGaleria();
    location.reload();

}

function aceptarCambioGaleria(){

    listaGaleria[idGaleria].titulo = document.getElementById("tituloInput").value;
    listaGaleria[idGaleria].alternativeText = document.getElementById("textAlt").value;
    

    if(document.getElementById("tituloInput").value == ""){
        swal("Debe ingresar el titulo","","error");
    }else{

        let rutaIMgg;
    try {
        let imgInput = document.getElementById("imgInput2");
        rutaIMgg = "../SRC/IMG/"+ imgInput.files[0].name;  
    } catch (error) {
        console.log("Error")
        rutaIMgg = listaGaleria[idGaleria].imgGaleria;
    }

    listaGaleria[idGaleria].imgGaleria = rutaIMgg;
  
    guardarLocalStorageGaleria();
    location.reload();
    }

    
}

function cerrarVentanaG(){

    overlayG.classList.remove('active');
	popupG.classList.remove('active');
    overlayG2.classList.remove('active');
	popupG2.classList.remove('active');
}


function guardarLocalStorageGaleria(){ 

    localStorage.setItem("Galeria", JSON.stringify(listaGaleria));

}

function leerLocalStorageAdminGaleria(){


  //  try {

    listaGaleria = JSON.parse(localStorage.getItem("Galeria"));
       
    if(listaGaleria == null){

        listaGaleria = new Array(0);
        console.log(listaGaleria)

    }else{
        for(let i = 0; i < listaGaleria.length; i++){

            contGaleria.innerHTML += `<div class="galeria" id="${i}"><div class="titulo"><h1>${listaGaleria[i].titulo}</h1></div><div class="icono"><img src="../SRC/IMG/edit.png" alt="Editar" onclick="abrirVentanaEditarGaleria(this)"><img src="../SRC/IMG/garbage.png" alt="Borrar" onclick="abrirVentanaBorrarGaleria(this)"></div></div>`; 
           
         }
    }
    

}

leerPassword();
function leerPassword(){

    let password = JSON.parse(localStorage.getItem("Password"));
    console.log(`La contraseña encriptada es:${password}`);

}

