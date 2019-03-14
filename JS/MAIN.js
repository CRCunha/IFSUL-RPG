if (window.innerWidth > 450) {
    alert("Para visualizar, utilize um dispositivo mobile, ou abra em modo desenvolvedor (F12) e logo após ative o modo mobile Ctrl+Shift+M .");
}

function controle1() {
    var controle1 = document.getElementById("controle1");
    var controle2 = document.getElementById("controle2");
    var controle3 = document.getElementById("controle3");

    controle1.style.backgroundColor = "#4e4e4e";
    controle2.style.backgroundColor = "#ccc";
    controle3.style.backgroundColor = "#ccc";

    document.getElementById("img-header").src = "./IMG/02-HEADER/D&D1.png";
}

function controle2() {
    var controle1 = document.getElementById("controle1");
    var controle2 = document.getElementById("controle2");
    var controle3 = document.getElementById("controle3");

    controle2.style.backgroundColor = "#4e4e4e";
    controle1.style.backgroundColor = "#ccc";
    controle3.style.backgroundColor = "#ccc";

    document.getElementById("img-header").src = "./IMG/02-HEADER/D&D2.png";
}

function controle3() {
    var controle1 = document.getElementById("controle1");
    var controle2 = document.getElementById("controle2");
    var controle3 = document.getElementById("controle3");

    controle3.style.backgroundColor = "#4e4e4e";
    controle1.style.backgroundColor = "#ccc";
    controle2.style.backgroundColor = "#ccc";

    document.getElementById("img-header").src = "./IMG/02-HEADER/D&D3.png";
}