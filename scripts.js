const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

const buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttonsContainer";
body.appendChild(buttonsContainer);


const grid16Button = document.createElement("button");
grid16Button.className = "grid16Button";
grid16Button.textContent = "Small grid (tap to reset)";
buttonsContainer.appendChild(grid16Button);

const grid64Button = document.createElement("button");
grid64Button.className = "grid64Button";
grid64Button.textContent = "Big grid (tap to reset)";
buttonsContainer.appendChild(grid64Button);

const grayColorButton = document.createElement("button");
grayColorButton.className = "grayColorButton";
grayColorButton.textContent = "Gray color paint";
buttonsContainer.appendChild(grayColorButton);

const rainbowColorButton = document.createElement("button");
rainbowColorButton.className = "rainbowColorButton";
rainbowColorButton.textContent = "Rainbow color paint";
buttonsContainer.appendChild(rainbowColorButton);

const eraseColorButton = document.createElement("button");
eraseColorButton.className = "eraseColorButton";
eraseColorButton.textContent = "Erase the color";
buttonsContainer.appendChild(eraseColorButton);


function createGrid16(){
  let deletion = container.querySelectorAll(".grid64");
  deletion.forEach(grid=>{
    grid.remove();
  });
  let deletion1 = container.querySelectorAll(".grid16");
  deletion1.forEach(grid=>{
    grid.remove();
  });
  for (let i = 0; i < 256; i++) {
    let grid = document.createElement("div");
    grid.className = "grid16";
    container.appendChild(grid);
  }
};
createGrid16();

function createGrid64(){
  let deletion = container.querySelectorAll(".grid16");
  deletion.forEach(grid=>{
    grid.remove();
  });
  let deletion1 = container.querySelectorAll(".grid64");
  deletion1.forEach(grid=>{
    grid.remove();
  });
  for (let i=0; i<4096; i++){
    let grid = document.createElement("div");
    grid.className = "grid64";
    container.appendChild(grid);
  }
};

function grayColorGrid() {
  let grid16 = document.querySelectorAll(".grid16");
  let grid64 = document.querySelectorAll(".grid64");
  let isMouseDown = false;

  grid16.forEach((element) => {
    element.addEventListener("mousedown", () => {
      isMouseDown = true;
    });

    element.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    element.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = 'gray';
      }
    });
  });

  grid64.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = 'gray';
      }
    });
  });
}
grayColorGrid();


function removerColorGrid(){
  let grid16 = document.querySelectorAll(".grid16");
  let grid64 = document.querySelectorAll(".grid64");
  let isMouseDown = false;

  grid16.forEach((element) => {
    element.addEventListener("mousedown", () => {
      isMouseDown = true;
    });

    element.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    element.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = 'white';
      }
    });
  });

  grid64.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (isMouseDown) {
        event.target.style.backgroundColor = 'white';
      }
    });
  });
}

function rainbowColorGrid(){
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';

  }
  let grid16 = document.querySelectorAll(".grid16");
  let grid64 = document.querySelectorAll(".grid64");
  let isMouseDown = false;
    grid16.forEach((element) => {
      element.addEventListener("mousedown", () => {
        isMouseDown = true;
      });
  
      element.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
  
      element.addEventListener("mouseover", (event) => {
        if (isMouseDown) {
          event.target.style.backgroundColor = randomColor();
        }
      });
    });
  
    grid64.forEach((element) => {
      element.addEventListener("mouseover", (event) => {
        if (isMouseDown) {
          event.target.style.backgroundColor = randomColor();
        }
      });
    });
  };

grid16Button.addEventListener("click", createGrid16);
grid64Button.addEventListener("click", createGrid64);
grayColorButton.addEventListener("click", grayColorGrid);
rainbowColorButton.addEventListener("click", rainbowColorGrid);
eraseColorButton.addEventListener("click",removerColorGrid);
