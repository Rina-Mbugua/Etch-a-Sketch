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
   //retreive the selected size from boxSizeRange from within this function
    const selectedSize = boxSizeRange.value;

    //calculate the size of boxes 
    const gridSize = parseFloat((480/selectedSize).toFixed(2));
    console.log(gridSize);
    console.log(selectedSize*selectedSize);

    //clear the existing boxes within the container
    container.innerHTML = "";

    for (var i = 0; i < (selectedSize * selectedSize); i++) {
        var div = document.createElement("div");
        div.style.border = " 0.5px solid grey";
        div.style.height = `${gridSize}px`;
        div.style.width = `${gridSize}px`; 
        div.style.boxSizing = "border-box";

        container.appendChild(div)
    }
}
