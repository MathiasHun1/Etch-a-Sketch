const container = document.querySelector('.container');

let rows = getUserInput();

let squareDivs = [];

for (let i = 0; i < rows*rows; i++) {
    let squareDiv = document.createElement('div');
    container.appendChild(squareDiv);
    squareDiv.classList.add('square-div');
    squareDiv.style.width = `calc(100% / ${rows})`;
    squareDiv.style.aspectRatio = '1';
    squareDivs.push(squareDiv);
    squareDiv.addEventListener('mouseover', () => {
        if (mouseDown === true) {
            squareDiv.style.backgroundColor = 'black';
        }
    })
}

let mouseDown = false;
container.addEventListener('mousedown', () => {
    mouseDown = true;
});
container.addEventListener('mouseup', () => {
    mouseDown = false;
});



function getUserInput() {
    let input;
    do {
         input = parseInt(prompt('Wirte how many pixels wide you want the canvas: '));
    } while (input > 100 || isNaN(input))

    return Math.abs(input);
}




