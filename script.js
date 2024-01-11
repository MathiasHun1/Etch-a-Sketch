const container = document.querySelector('.container');

rows = getUserInput()
createGrid(rows);

function createGrid(rows) {
    for (let i = 0; i < rows*rows; i++) {
        let squareDiv = document.createElement('div');
        container.appendChild(squareDiv);
        squareDiv.classList.add('square-div');
        squareDiv.setAttribute('style', `width: calc(100% / ${rows})`);
    }
}

function getUserInput() {
    let input;
    do {
         input = parseInt(prompt('Wirte how many pixels wide you want the canvas: '));
    } while (input > 100 || isNaN(input))

    return Math.abs(input);
}

