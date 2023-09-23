const container = document.getElementById("div-container");
const boxSizeRange = document.getElementById("boxSizeRange");
const boxSizeLabel = document.getElementById("boxSizeLabel"); 

//put and event listener to the boxSizeRange

boxSizeRange.addEventListener("input", updateBoxSizeLabel);

function updateBoxSizeLabel() {
    const selectedSize = boxSizeRange.value;
    boxSizeLabel.textContent = `Grid Size: ${selectedSize}x${selectedSize}`
}


function create () {
    var form = document.getElementById("boxForm");
    noBoxes = form.elements['noBox'].value;

    //calculate the size of boxes 
    const gridSize = Math.floor(480/selectedSize);

    for (var i = 0; i < noBoxes; i++) {
        var div = document.createElement("div");
        div.style.border = " 0.5px solid grey";
        div.style.height = `${gridSize}`; //based on selectedSize
        div.style.width = `${gridSize}`; //based on selectedSize
        div.style.boxSizing = "border-box";

        container.appendChild(div)
    }
}
