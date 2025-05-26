const container = document.getElementById("container");

function createGrid() {
  let i = 1;
  while (i <= 16) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDiv");
    container.appendChild(newDiv);
    newDiv.textContent = i;

    i++;
  }
}

createGrid();
