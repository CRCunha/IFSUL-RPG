function load() {
    var data = document.getElementById("data");
    var title = document.getElementById("title");
    var text = document.getElementById("text");

    data.innerHTML = "30/03/2019";
    title.innerHTML = "New Title";
    text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
        // text.innerHTML = "Nesta data se inicía a criação de um novo Layout para o aplicativo."
}

var x = 0;
var y = 1;

function left() {

    if (x == 0) {
        data.innerHTML = "30/03/2019";
        title.innerHTML = "New Title";
        text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
            // text.innerHTML = "Nesta data se inicía a criação de um novo Layout para o aplicativo."
    } else {
        data.innerHTML = "31/03/2019";
        title.innerHTML = "Downlaod Android";
        text.innerHTML = "O site também está na versão de aplicativo android <a href='https://drive.google.com/file/d/1N_cDg3erO02tWqmCT2CKle04fv13F7qa/view?usp=sharing'>Downlaod</a>"
    }

}

function right() {

    if (y > 0) {
        data.innerHTML = "31/03/2019";
        title.innerHTML = "Downlaod Android";
        text.innerHTML = "O site também está na versão de aplicativo android <a href='https://drive.google.com/file/d/1N_cDg3erO02tWqmCT2CKle04fv13F7qa/view?usp=sharing'>Downlaod</a>"
    } else {
        data.innerHTML = "30/03/2019";
        title.innerHTML = "New Title";
        text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
            // text.innerHTML = "Nesta data se inicía a criação de um novo Layout para o aplicativo"
    }

}