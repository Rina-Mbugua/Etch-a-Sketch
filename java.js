const container = document.getElementById("div-container");
const boxSizeRange = document.getElementById("boxSizeRange");
const boxSizeLabel = document.getElementById("boxSizeLabel"); 
const rainbowButton = document.getElementById("changeToRainbow")

function generateRandomColor () {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

//put and event listener to the boxSizeRange

boxSizeRange.addEventListener("input", updateBoxSizeLabel);

function updateBoxSizeLabel() {
    const selectedSize = boxSizeRange.value;
    boxSizeLabel.textContent = `Grid Size: ${selectedSize}x${selectedSize}`
}

function divHover(event) {
    if (rainbowEffectEnabled === "true") {
        event.target.style.backgroundColor = generateRandomColor();
    } else {
        event.target.style.backgroundColor = "rgb(96,96,96)";
}
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

        div.addEventListener("mouseenter", divHover);

        container.appendChild(div)
    }
}
