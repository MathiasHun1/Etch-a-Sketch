const container = document.querySelector('.container');
const body = document.querySelector('#body');

// start the page with a canvas
createCanvas(container,getUserInput());

// add reset/resize button -OK
const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset-button');
resetButton.textContent = "reset";
body.appendChild(resetButton);
resetButton.style.backgroundColor = 'aquamarine';

// add color button
const colorButton = document.createElement('button');
colorButton.setAttribute('id', 'color-button');
colorButton.innerText = 'Rainbow';
body.appendChild(colorButton);
colorButton.style.backgroundColor = 'aquamarine';

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

//resetting --OK
resetButton.addEventListener('click', () => {
    container.innerHTML = '';
    let rows = getUserInput();
    createCanvas(container, rows);
    colorFlag = false;
    colorButton.style.backgroundColor = 'aquamarine';
});

resetButton.addEventListener('mousedown', () => resetButton.style.backgroundColor = 'darkcyan');
resetButton.addEventListener('mouseup', () => resetButton.style.backgroundColor = 'aquamarine');

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
         input = parseInt(prompt('Wirte how many pixels wide you want the canvas: '));
    } while (input > 100 || isNaN(input))

    return Math.abs(input);
}

function randomRGB () {
    return Math.floor(Math.random() * 255);
}



