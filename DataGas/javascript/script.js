
var nivel = 90;

var level = document.querySelector(".level");
level.style.height = nivel + "%";
if(nivel>=70){
    level.style.backgroundColor = "rgb(2, 248, 30)";
}
else if((nivel>=30)&&(nivel<70)){
    level.style.backgroundColor = "rgb(255, 200, 0)";
}
else if((nivel<30)&&(nivel>=0)){
    level.style.backgroundColor = "rgb(255, 30, 0)";
}

var texto = document.querySelector(".texto");
console.log(texto.textContent);

texto.textContent += nivel + "%";


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






