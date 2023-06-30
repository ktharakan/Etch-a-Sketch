const grid = document.querySelector(".container");
let colour = "#333333";
let isColor = false;
let isDrawing = false; // Variable to track if the mouse button is held down
let currentSize = 16;
function genGrid(currentSize) {
  grid.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;

  for (let i = 0; i < currentSize * currentSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    gridElement.addEventListener("mousedown", startDrawing);
    gridElement.addEventListener("mouseover", draw);
    gridElement.addEventListener("mouseup", stopDrawing);
    grid.appendChild(gridElement);
  }
}

const colorPicker = document.getElementById("colorPicker");
const colorbtn = document.getElementById("color");
const clearbtn = document.getElementById("clear");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

colorPicker.oninput = (e) => setColor(e.target.value);
colorbtn.onclick = () => setMode();
clearbtn.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function setColor(newColor) {
  colour = newColor;
}

function setCurrentSize(value) {
  currentSize = value;
}

function setMode() {
  isColor = true;
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`;
}

function startDrawing() {
  if (isColor == true) {
    isDrawing = true;
  }
}

function draw(e) {
  if (isDrawing) {
    e.target.style.backgroundColor = colour;
  }
}

function stopDrawing() {
  isDrawing = false;
}

function clearGrid() {
  grid.innerHTML = "";
}

function reloadGrid() {
  clearGrid();
  genGrid(currentSize);
}

function changeSize(value) {
  setCurrentSize(value);
  reloadGrid();
}

genGrid(currentSize);
