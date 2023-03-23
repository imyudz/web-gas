
var nivel = 90;

var level = document.querySelector(".level");
level.style.height = nivel + "%";


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






