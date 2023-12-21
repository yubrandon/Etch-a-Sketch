var dim = 16;
function createGrid(n){
    const length = 600/n;
    const container = document.querySelector('.container');
    for(let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.style.padding = '0';
        for(let j = 0; j <n; j++) {
            let col = document.createElement('div');
            col.className = "grid";
            col.style.width = length+"px";
            col.style.height= length+"px";

            row.appendChild(col);
        }
        container.appendChild(row);
    }
    color();
}
createGrid(dim);

function deleteGrid() {
    const tiles = document.querySelector('.container');
    var grids = document.querySelectorAll('.row');
    for(let i = 0; i < grids.length; i++) {
        let del = grids[i];
        var temp = tiles.removeChild(del);
    }

}

function changeSize() {
    let size = window.prompt("Enter the dimensions you would like for your grid.",'16');
    //console.log(size);
    while(size > 100) size = window.prompt("ERROR: Dimensions must be less than 100. Please re-enter a new value.",'16');
    deleteGrid();
    createGrid(size);
}

function resetGrid() {
    let tiles = document.getElementsByClassName('grid');
    for(let i = 0; i < tiles.length; i++) tiles[i].style.backgroundColor = 'white';
    console.log("reset");
}

function color (){
    let tiles = document.getElementsByClassName('grid');
    for(let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('mouseover',() => {
            tiles[i].style.backgroundColor = 'black';
            //console.log(tiles[i]);
        });
    }
}


function setButtons () {
    let reset = document.querySelector('.reset');
    reset.addEventListener('click',(resetGrid));

    let prompt = document.querySelector('.prompt');
    prompt.addEventListener('click',(changeSize));
}
setButtons();