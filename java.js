const container = document.getElementById("div-container");
const boxSizeRange = document.getElementById("boxSizeRange");
const boxSizeLabel = document.getElementById("boxSizeLabel"); 

function create () {
    var form = document.getElementById("boxForm");
    noBoxes = form.elements['noBox'].value;

    for (var i = 0; i < noBoxes; i++) {
        var div = document.createElement("div");
        div.style.border = " 0.5px solid grey";
        div.style.height = "7.5px";
        div.style.width = "7.5px";
        div.style.boxSizing = "border-box";

        container.appendChild(div)
    }
}
