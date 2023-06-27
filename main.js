const grid = document.querySelector(".container");

function genGrid(v) {
  grid.style.gridTemplateColumns = `repeat(${v}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${v}, 1fr)`;

  for (let i = 0; i < v * v; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("gridElement");
    grid.appendChild(gridElement);
  }
}

genGrid();
