// Debug
console.log('JS OK!')

// Loop
const cells = document.querySelector('#cells');
for (let squareIndex = 1; squareIndex <= 100; squareIndex++) {

    // Conditions
    if (squareIndex % 3 === 0 && squareIndex % 5 === 0) {
        let element = `<div id="cell-${squareIndex}" class="cell">${'FizBuz'}</div>`
        cells.innerHTML += element;
        // new bg
        const elementCell = document.getElementById('cell-' + squareIndex);
        elementCell.style.backgroundColor = `red`;
    } else if (squareIndex % 3 === 0) {
        let element = `<div id="cell-${squareIndex}" class="cell">${'Fizz'}</div>`
        cells.innerHTML += element;
        // new bg
        const elementCell = document.getElementById('cell-' + squareIndex);
        elementCell.style.backgroundColor = `orange`;
    } else if (squareIndex % 5 === 0) {
        let element = `<div id="cell-${squareIndex}" class="cell">${'Buzz'}</div>`
        cells.innerHTML += element;
        // new bg
        const elementCell = document.getElementById('cell-' + squareIndex);
        elementCell.style.backgroundColor = `black`;
    } else {
        let element = `<div id="cell-${squareIndex}" class="cell">${squareIndex}</div>`
        cells.innerHTML += element;
    }

}

