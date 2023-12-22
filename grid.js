//Default dimension
var dim = 16;
//Creates a grid based on user input
function createGrid(n){
    //Get tile size by dividing div size by n tiles 
    const length = 600/n;
    //Insert into div
    const container = document.querySelector('.container');
    for(let i = 0; i < n; i++) {
        //Create n rows
        const row = document.createElement('div');
        row.className = 'row';
        row.style.padding = '0';
        for(let j = 0; j <n; j++) {
            //Within each row, create n tiles
            let col = document.createElement('div');
            col.className = "grid";
            col.style.width = length+"px";
            col.style.height= length+"px";

            row.appendChild(col);
        }
        //Add the row div to the container
        container.appendChild(row);
    }
    color();
}
//Create a grid with default dimensions when loading the site
createGrid(dim);

function deleteGrid() {
    //Remove all 'row' class divs from the container
    //Used with createGrid() to reset the canvas
    const tiles = document.querySelector('.container');
    var grids = document.querySelectorAll('.row');
    for(let i = 0; i < grids.length; i++) {
        let del = grids[i];
        var temp = tiles.removeChild(del);
    }

}

function changeSize() {
    //Prompt user for an integer value less than 100
    //Does not check for integer type input
    let size = window.prompt("Enter the dimensions you would like for your grid.",'16');
    //console.log(size);
    while(size > 100) size = window.prompt("ERROR: Dimensions must be less than 100. Please re-enter a new value.",'16');
    //Delete current canvas and re-create with new dimensions
    deleteGrid();
    createGrid(size);
}

function resetGrid() {
    //Iterate through each tile and set its background color to white
    let tiles = document.getElementsByClassName('grid');
    for(let i = 0; i < tiles.length; i++) tiles[i].style.backgroundColor = 'white';
    console.log("reset");
}

function color (){
    //Adds event to each div where if mouse traverses it, the background color will change
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