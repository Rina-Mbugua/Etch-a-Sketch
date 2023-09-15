const container = document.getElementById("div-container")

function create () {
    var form = document.getElementById("boxForm");
    noBoxes = form.elements['noBox'].value;

    for (var i = 0; i < noBoxes; i++) {
        var div = document.createElement("div");
        div.style.border = "solid";
        div.style.borderColor = "red";
        div.style.height = "30px";
        div.style.width = "30px";
        container.appendChild(div)
    }
}
