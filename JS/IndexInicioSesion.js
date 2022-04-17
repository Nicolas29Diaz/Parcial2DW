// document.getElementById("Registrarse").addEventListener("click", registro)
document.getElementById("inicio_de_sesion").addEventListener("click", Iniciar_sesion)
document.getElementById("login_boton").addEventListener("click", Login)
window.addEventListener("resize", Ancho);


let formulario_login = document.querySelector(".formulario_Login");
let formulario_registro = document.querySelector(".formulario_registro");
let Contenedor_form = document.querySelector(".contenedor_formulario");
let recuadro_login = document.querySelector(".recuadro_login");
let recuadro_registro = document.querySelector(".recuadro_registro");


function Ancho() {
    if (window.innerWidth > 850) {
        recuadro_login.style.display = "block";
        recuadro_registro.style.display = "block";
    } else {
        recuadro_registro.style.display = "block";
        recuadro_registro.style.opacity = "1";
        recuadro_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        Contenedor_form.style.left = "0px";
    }
}
Ancho();

function registro() {

    if (window.innerWidth > 850) {

        formulario_registro.style.display = "block";
        Contenedor_form.style.left = "410px";
        formulario_login.style.display = "none";
        recuadro_login.style.opacity = "1";
        recuadro_registro.style.opacity = "0";

    } else {

        formulario_registro.style.display = "block";
        Contenedor_form.style.left = "0px";
        formulario_login.style.display = "none";
        recuadro_login.style.display = "block";
        recuadro_registro.style.display = "none";
        recuadro_login.style.opacity = "1";
    }
}

function Iniciar_sesion() {
    if (window.innerWidth > 850) {

        formulario_registro.style.display = "none";
        Contenedor_form.style.left = "10px";
        formulario_login.style.display = "block";
        recuadro_login.style.opacity = "0";
        recuadro_registro.style.opacity = "1";

    } else {

        formulario_registro.style.display = "none";
        Contenedor_form.style.left = "0px";
        formulario_login.style.display = "block";
        recuadro_login.style.display = "none";
        recuadro_registro.style.display = "block";

    }
}

let usuario;
let password;
let password_encrip;

function Login() {

    usuario = document.getElementById("Usuario").value;
    password = document.getElementById("password").value;
    password_encrip = btoa(password);

    if(usuario == ""){
        // alert("Ingrese su usuario");
        swal("Ingrese su usuario","");
    }else{

    
        console.log(password);
        if (usuario == "admin" && password == "a1234") {
    
            guardarContraseñaEncriptada();
            window.location.href = "../HTML/PanelAdministrativo.html";
            console.log("Bienvenido");

        }else{
            console.log("Ladrón");
            swal("Contraseña Incorreta","","error");
        }

    }

    
}

function guardarContraseñaEncriptada(){
    localStorage.setItem("Password", JSON.stringify(password_encrip));
}