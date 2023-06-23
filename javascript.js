function hover(event){
    event.target.style.backgroundColor = 'rgb('+Math.random()*256+', '+Math.random()*256+', '+Math.random()*256+')';
}

const textBox = document.getElementById('noOfSquares');
const enterButton = document.getElementById('enterButton');
const outerBox = document.getElementById('outerBox');

//gridUnit.setAttribute('id', 'gridUnit');

outerBox.style.display = 'flex';
outerBox.style.marginTop = '3%';

enterButton.addEventListener('click', ()=>{
    x = parseInt(textBox.value);
    
    outerBox.innerHTML = '';

    for (i = 0; i<x; i++){
        let row = document.createElement('div');
        row.style.flex = '1';
        outerBox.appendChild(row);
        for (j = 0; j<x; j++){
            const gridUnit = document.createElement('div');
            gridUnit.style.width = 960/x+'px';
            gridUnit.style.border = '3px solid black';
            gridUnit.style.height = 960/x+'px';
            gridUnit.onmouseenter = hover;
            row.appendChild(gridUnit);
        }
    }
})

