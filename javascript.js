const textBox = document.getElementById('noOfSquares');
const enterButton = document.getElementById('enterButton');
const outerBox = document.getElementById('outerBox');
const gridUnit = document.createElement('div');
gridUnit.style.border = '3px solid black';
outerBox.style.display = 'flex';
gridUnit.style.flex = '1';

enterButton.addEventListener('click', ()=>{
    x = parseInt(textBox.value);
    gridUnit.style.width = 960/x+'px';
    gridUnit.style.height = 960/x+'px';

    outerBox.innerHTML = '';

    for (i = 0; i<x; i++){
        var row = document.createElement('div');
        outerBox.appendChild(row);
        for (j = 0; j<x; j++){
            row.appendChild(gridUnit.cloneNode(true));
        }
    }
})