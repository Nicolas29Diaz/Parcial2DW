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
    valorCupon();
    calcularValorTotal();
    guardarLocalStorage();
    console.log(valorTotal)

}