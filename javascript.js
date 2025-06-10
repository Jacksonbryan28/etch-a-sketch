const container = document.querySelector("#container");
container.style.backgroundColor = "pink";
let gridDensity = 16;
resizeGrid(16);

function createGrid(dimension) {
  for (i = 0; i < dimension; i++) {
    const div = document.createElement("div");
    //   div.textContent = `${i}`;
    div.classList.toggle("square");
    container.appendChild(div);
    for (r = 1; r < dimension; r++) {
      const div = document.createElement("div");
      // div.textContent = "R:" + `${r}`;
      div.classList.toggle("square");
      container.appendChild(div);
    }
  }
}

function resizeGrid(input) {
  //clear grid
  gridClear();
  const containerWidth = 960;
  let divWidth = 50;
  //take input number and divide 960 by that
  divWidth = containerWidth / input;
  console.log(divWidth);

  createGrid(input);

  //selects all dives within the container
  const divList = container.querySelectorAll("div");

  //Adds a background color when a div is hovered
  divList.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "blue";
    });
  });

  //set width and height of th divs to that number
  divList.forEach((div) => {
    div.classList.toggle("square");
    div.style.width = divWidth + "px";
    div.style.height = divWidth + "px";
  });
}

//clear the grid when a new input is selected
function gridClear() {
  //selects all dives within the container
  const divList = container.querySelectorAll("div");

  //Adds a background color when a div is hovered
  divList.forEach((div) => {
    container.removeChild(div);
  });
}

//adds variable to button
const button = document.querySelector("button");

button.addEventListener("click", () => {
  gridDensity = prompt("Enter a number between 1-100");
  if (gridDensity > 0 && gridDensity <= 100) {
    console.log(gridDensity);
    resizeGrid(gridDensity);
  }
});
