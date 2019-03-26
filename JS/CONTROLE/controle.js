function load() {
    var data = document.getElementById("data");
    var title = document.getElementById("title");
    var text = document.getElementById("text");

    data.innerHTML = "26/03/2019";
    title.innerHTML = "Get Start";
    text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
        // text.innerHTML = "Nesta data se inicía a criação de um novo Layout para o aplicativo."
}

var x = 0;
var y = 1;

function left() {

    if (x == 0) {
        data.innerHTML = "26/03/2019";
        title.innerHTML = "Get Start";
        text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
            // text.innerHTML = "Nesta data se inicía a criação de um novo Layout para o aplicativo."
    } else {
        data.innerHTML = "30/03/2019";
        title.innerHTML = "New Title";
        text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
    }

}

function right() {

    if (y > 0) {
        data.innerHTML = "30/03/2019";
        title.innerHTML = "New Title";
        text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
    } else {
        data.innerHTML = "26/03/2019";
        title.innerHTML = "Get Start";
        text.innerHTML = "Praesent euismod lacus nibh, quis pretium turpis finibus id."
            // text.innerHTML = "Nesta data se inicía a criação de um novo Layout para o aplicativo"
    }

}