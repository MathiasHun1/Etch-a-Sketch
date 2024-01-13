const container = document.querySelector('.container');
const body = document.querySelector('#body');

// start the page with a canvas
createCanvas(container,getUserInput());

// add reset/resize button -OK
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset-button');
resetButton.textContent = "reset";
body.appendChild(resetButton);

//resetting --OK
resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    let rows = getUserInput();
    createCanvas(container, rows);
});

// mouse-down flag --OK
let mouseDown = false;
container.addEventListener('mousedown', () => {
    mouseDown = true;
});
container.addEventListener('mouseup', () => {
    mouseDown = false;
});
// implementation of the drawing, using event object --OK
container.addEventListener('mouseover', (event) => {
    if (mouseDown === true) {
        hoveredDiv = event.target;
        hoveredDiv.style.backgroundColor = 'black';
    } 
})

// create canvas func --OK
function createCanvas (cont, rows) {
    for (let i = 0; i < rows*rows; i++) {
        let squareDiv = document.createElement('div');
        cont.appendChild(squareDiv);
        squareDiv.classList.add('square-div');
        squareDiv.style.width = `calc(100% / ${rows})`;
        squareDiv.style.aspectRatio = '1';
    }    
}

// user input func --OK
function getUserInput() {
    let input;
    do {
         input = parseInt(prompt('Wirte how many pixels wide you want the canvas: '));
    } while (input > 100 || isNaN(input))

    return Math.abs(input);
}




