const container = document.querySelector('.container');
const body = document.querySelector('#body');
const blackButton = document.querySelector('#black-button');
const rainbowButton = document.querySelector('#rainbow-button');
const clearButton = document.querySelector('#clear-button');
let rangeInput = document.querySelector('#range-input');
const defaultSize = rangeInput.value;

// start the page with a canvas
createCanvas(container, defaultSize);

// redraw canvas with clear button
clearButton.addEventListener('click',() => {
    container.innerHTML = '';
    createCanvas(container, pixels)
})
let pixels = rangeInput.value;
rangeInput.addEventListener('input', () => {
    pixels = rangeInput.value;
})

// add color-button flag
let colorFlag = false;
colorButton.addEventListener('click', () => {
    if (colorFlag === false) {
        colorFlag = true;
    } else if (colorFlag === true) {
        colorFlag = false;
    }

    if (colorButton.style.backgroundColor === 'aquamarine') {
        colorButton.style.backgroundColor = 'darkcyan';
    } else {
        colorButton.style.backgroundColor = 'aquamarine';
    }
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

// user input func --OK
function getUserInput() {
    let input;
    do {
         input = parseInt(prompt('Wirte how many pixels wide you want the canvas: ', '100'));
    } while (input > 100 || isNaN(input))

    return Math.abs(input);
}

// randomize color
function randomRGB () {
    return Math.floor(Math.random() * 255);
}



