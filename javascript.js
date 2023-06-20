function appendMultiple(item, parent){
    parent.appendChild(item);
}

const unitSquare = document.createElement('div');
const row = document.createElement('div')
const br = document.createElement('br')
row.style.cssText = "display: flex; height: 960px; width: fit-content; align-content: space-around";
const outerSquare = document.querySelector('#largerBox')
unitSquare.style.cssText = 'border: 3px solid black; width: 60px; height: 60px; flex:1';
counter = 0
for (i = 0; i<7; i++){
    outerSquare.appendChild(row);
    row.appendChild(unitSquare.cloneNode(true));
    outerSquare.appendChild(br);    
}
