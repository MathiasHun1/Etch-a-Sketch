const container = document.querySelector('.container');
const body = document.querySelector('#body');
const blackButton = document.querySelector('#black-button');
const rainbowButton = document.querySelector('#rainbow-button');
const clearButton = document.querySelector('#clear-button');
let rangeInput = document.querySelector('#range-input');
const defaultSize = rangeInput.value;
let pixels = rangeInput.value;

// start the page with a canvas
createCanvas(container, defaultSize);

// redraw canvas with clear button
clearButton.addEventListener('click',() => {
    container.innerHTML = '';
    createCanvas(container, pixels);
})

// redraw canvas when using the range-bar
rangeInput.addEventListener('input', () => {
    pixels = rangeInput.value;
    container.innerHTML = '';
    createCanvas(container, pixels);
})

// add rainbow-button flag + change button colors
let colorFlag = false;
rainbowButton.style.backgroundColor = '#c3073f';
blackButton.style.backgroundColor = '#6f2232';
rainbowButton.addEventListener('click', () => {
    colorFlag = true;
    rainbowButton.style.backgroundColor = '#6f2232';
    blackButton.style.backgroundColor = '#c3073f';
});  
blackButton.addEventListener('click', () => {
    colorFlag = false;
    rainbowButton.style.backgroundColor = '#c3073f';
    blackButton.style.backgroundColor = '#6f2232';
})
clearButton.addEventListener('mousedown', () => clearButton.style.backgroundColor = '#6f2232');
clearButton.addEventListener('mouseup', () => clearButton.style.backgroundColor = '#c3073f');

// mouse-down flag --OK
let mouseDown = false;
container.addEventListener('mousedown', () => {
    mouseDown = true;
});
container.addEventListener('mouseup', () => {
    mouseDown = false;
});

// implementation of the drawing, using event object --OK
container.addEventListener('mousemove', (event) => {
    if (mouseDown === true) {
        let red = randomRGB();
        let green = randomRGB();
        let blue = randomRGB();
        hoveredDiv = event.target;
        if (colorFlag === false) {
            hoveredDiv.style.backgroundColor = 'black';
        } else if (colorFlag === true) {
            hoveredDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        if (hoveredDiv === container) {
            container.style.backgroundColor = 'white';
        }
    }
});

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

// randomize color
function randomRGB () {
    return Math.floor(Math.random() * 255);
}



