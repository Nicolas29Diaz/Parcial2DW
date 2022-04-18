let codigoCupon;
let precioBoleta;
let valorTotal;

leerLocalStorageUsuario();

function leerLocalStorageUsuario(){

    codigoCupon = JSON.parse(localStorage.getItem("Cupon"));
    console.log(codigoCupon);
    
}


function validarCupon(){
    let inputCupon = document.getElementById("cup").value;
    let bool;
    if(inputCupon == codigoCupon){
        bool = true;
       
    }else{
        bool = false;
       
    }
    console.log(bool);
    return bool;
}

function valorCupon(){

    let boleta = document.getElementById("boleta").value

    if(boleta == "media"){
        precioBoleta = 700000;
    }else if(boleta == "frontal"){
        precioBoleta = 1000000;
    }else if(boleta == "atras"){
        precioBoleta = 400000;
    }
   
}

function calcularValorTotal(){

    valorCupon();

    if(validarCupon()){
        valorTotal = precioBoleta * 0.5;

    }else{
        valorTotal = precioBoleta;
    }


}

function guardarLocalStorage(){ 

    localStorage.setItem("ValorPago", JSON.stringify(valorTotal));

}


function oprimirBoton(){

    let name = document.getElementById("name").value;
    let numBol = document.getElementById("numBol").value;
    let email = document.getElementById("email").value;

    if(name == "" || numBol == "" || email == ""){
        swal("Complete los datos","","error");
    }else{
        
        abrirVentana();
        valorCupon();
        calcularValorTotal();
        guardarLocalStorage();

        if(!validarCupon()){

            let valMoney = new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"});
        
            document.getElementById("retroalimentacion").innerHTML = `Cupón no valido.<br><br>El valor a pagar por boleta es: <br>${valMoney.format(valorTotal)
            }`;
            console.log(valorTotal + "COMPLETO")

        }else{

            let valMoney = new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"});
        
            document.getElementById("retroalimentacion").innerHTML = `Cupón valido! (50% de descuento)<br><br>El valor a pagar por boleta es <br>${valMoney.format(valorTotal)
            }`;
            console.log(valorTotal)

        }
        
      
    }
   

}

let overlay = document.getElementById('overlay');
let	popup = document.getElementById('popup');




function cerrarVentana(){
   
    overlay.classList.remove('active');
	popup.classList.remove('active');

}


function abrirVentana(){

    overlay.classList.add('active');
	popup.classList.add('active');
}

function comprar(){
    window.open("../HTML/exitoReserva.html", '_blank');
}