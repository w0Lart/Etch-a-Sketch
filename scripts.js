const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
body.appendChild(container);




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

function grayColorGrid(){
  let grid16 = document.querySelectorAll(".grid16");
  grid16.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'gray';
    });
  });
  let grid64 = document.querySelectorAll(".grid64");
  grid64.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'gray';
    });
  });
};

function removerColorGrid(){
  let grid16 = document.querySelectorAll(".grid16");
  grid16.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'white';
    });
  });
  let grid64 = document.querySelectorAll(".grid64");
  grid64.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = 'white';
    });
  });
};

function rainbowColorGrid(){
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }; 
  let grid16 = document.querySelectorAll(".grid16");
  grid16.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = randomColor();
    });
  });
  let grid64 = document.querySelectorAll(".grid64");
  grid64.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = randomColor();
    });
  });
};



