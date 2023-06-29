const grid = document.querySelector(".container");
const colour = "red";
let isDrawing = false; // Variable to track if the mouse button is held down

function genGrid(v) {
  grid.style.gridTemplateColumns = `repeat(${v}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${v}, 1fr)`;

  for (let i = 0; i < v * v; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.addEventListener("mousedown", startDrawing);
    gridElement.addEventListener("mouseover", draw);
    gridElement.addEventListener("mouseup", stopDrawing);
    grid.appendChild(gridElement);
  }
}

function startDrawing() {
  isDrawing = true;
}

function draw(e) {
  if (isDrawing) {
    e.target.style.backgroundColor = colour;
  }
}

function stopDrawing() {
  isDrawing = false;
}

genGrid(60);
