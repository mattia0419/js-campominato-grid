const buttonGenerator = document.getElementById("generator");

const difficultyselect = document.getElementById("difficult");


const grid = document.getElementById("griglia");

buttonGenerator.addEventListener("click", function(){
    const difficult = parseInt(difficultyselect.value);
    console.log(difficult);
    let size = "";
    if(difficult == 1){
        size = 7;
        console.log(size);
    }
    else if(difficult == 2){
        size = 9;
    }
    else if(difficult == 3){
        size = 10;
    }
    generaGriglia(size);
})







function generaGriglia(size){
    
    
    grid.innerHTML = "";


    for(let i = 1; i <= size * size; i++){
        
        const cell = document.createElement("div");
        
        if(size == 10){
            cell.classList.add("cell");
        }
        else if(size == 9){
            cell.classList.add("cell-9");
        }
        else if(size == 7){
            cell.classList.add("cell-7");
        }

        
        cell.innerText = i;
        cell.addEventListener("click", function(){
            this.classList.add("green");
            console.log(i);
        })
        grid.append(cell);
    }
    
}