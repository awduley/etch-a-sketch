const container = document.querySelector('.container');


function createGrid(width, height) {
  for(let i = 1; i <= (width * height); i ++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');
    container.appendChild(newDiv);
  }
}

createGrid(16, 16);