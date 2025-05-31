const container = document.getElementById("container");
const sizeBtn = document.getElementById("sizeBtn");
let squares;

// Creates the grid
function createGrid() {
  let i = 1;
  while (i <= 16) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDiv");
    container.appendChild(newDiv);
    newDiv.textContent = i;

    i++;
  }
  squares = document.querySelectorAll(".gridDiv");
}

// function randomColor() {
//   let rgbR = Math.ceil(Math.random() * 255);
//   let rgbG = Math.ceil(Math.random() * 255);
//   let rgbB = Math.ceil(Math.random() * 255);
// }

// Picks up the new square size
function changeSquareSize() {
  let newSize = prompt("A number from 1-100");
  if (newSize === null || newSize === "" || isNaN(parseInt(newSize))) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }

  let sizeNum = parseInt(newSize);
  if (sizeNum < 1 || sizeNum > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  let rgbR = Math.floor(Math.random() * 256);
  let rgbG = Math.floor(Math.random() * 256);
  let rgbB = Math.floor(Math.random() * 256);

  updateSquare();
  squares.forEach((square) => {
    square.style.height = `${sizeNum}px`;
    square.style.width = `${sizeNum}px`;
    square.style.backgroundColor = `rgb(${rgbR} ${rgbG} ${rgbB})`;
    square.style.opacity = 0.1;
  });
}
function updateSquare() {
  function eventT() {
    console.log("testing log");
    square.style.opacity += 0.1;
  }

  squares.forEach((square) => {
    square.removeEventListener("mouseover", eventT);
    square.addEventListener("mouseover", eventT);
  });
}

createGrid();
sizeBtn.addEventListener("click", changeSquareSize);
