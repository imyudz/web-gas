/*var nivel;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost:8080/data-gas");
xmlhttp.send();
xmlhttp.addEventListener("load", function(){ 
    var listaValores = JSON.parse(xmlhttp.responseText);
    console.log(listaValores);
    listaValores.forEach(valor => {
        //console.log(listaValores[0].dataGasValor);
        nivel = parseFloat(listaValores[0].dataGasValor);
        
    });
    utilizarValor(nivel);
});
*/
var nivel;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "http://localhost:8080/data-gas");
xmlhttp.setRequestHeader("Cache-Control", "no-cache");
xmlhttp.setRequestHeader("Pragma", "no-cache");
xmlhttp.send();
xmlhttp.addEventListener("load", function(){ 
    var listaValores = JSON.parse(xmlhttp.responseText);
    console.log(listaValores);
    listaValores.sort(function(a, b) {
        return new Date(b.registrationDate) - new Date(a.registrationDate);
    });
    nivel = parseFloat(listaValores[0].dataGasValor);
    utilizarValor(nivel);
});

console.log(nivel);

function utilizarValor(valor){
    var texto = document.querySelector(".texto");
    console.log(texto.textContent);
    texto.textContent += nivel + "%";
    var btnOkelement = document.getElementById("okelement");
    var level = document.querySelector(".level");
    level.style.height = nivel + "%";

    if(nivel>=30){
        level.style.backgroundColor = "rgb(2, 248, 30)";
        btnOk.textContent = "OK";
        btnOkelement.style.color = "rgb(0,150,50)";
        tique.className = "bi bi-check-circle-fill text-success tique-verde";
        bordaCard.className = "card card-sm border-success";
    }
    else if((nivel>10)&&(nivel<30)){
        level.style.backgroundColor = "rgb(255, 200, 0)";
        btnOk.textContent = "Na reserva";
        btnOkelement.style.color = "rgb(255,200,0)";
        tique.className = "bi bi-exclamation-triangle text-warning";
        bordaCard.className = "card card-sm border-warning";
    }
    else if((nivel<=10)&&(nivel>=0)){
        level.style.backgroundColor = "rgb(255, 30, 0)";
        btnOk.textContent = "Vazio";
        btnOkelement.style.color = "rgb(255, 30, 50)";
        tique.className = "bi bi-exclamation-triangle text-danger";
        btnSolicitaBotj.style.visibility = "visible";
        bordaCard.className = "card card-sm border-danger";
    }
    
}

var btnOk = document.querySelector(".ok");
var tique = document.getElementById("tique-verde");


var btnSolicitaBotj = document.getElementById("solicita");
btnSolicitaBotj.style.visibility = "hidden";

var bordaCard = document.getElementById("card");


var modoEscuro = true;

function alternarModo(){
    var body = document.getElementById("body");
    var selfbtn = document.getElementById("tema");

    if(modoEscuro){
        body.className = "bg-light text-dark";
        modoEscuro = false;
        selfbtn.className = "btn btn-dark";
        selfbtn.textContent = "Dark Mode";
    }
    else{
        body.className = "bg-dark text-light";
        selfbtn.className = "btn btn-light";
        selfbtn.textContent = "Light Mode";
        modoEscuro = true;

    }
}






