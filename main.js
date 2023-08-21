const buttonGenerator = document.getElementById("generator");

const buttonGenerator2 = document.getElementById("generator-2");

const buttonGenerator3 = document.getElementById("generator-3");


const grid = document.getElementById("griglia");

buttonGenerator.addEventListener("click", function(){
    generaGriglia(10);
})

buttonGenerator2.addEventListener("click", function(){
    generaGriglia(9);
})

buttonGenerator3.addEventListener("click", function(){
    generaGriglia(7);
})



function generaGriglia(size){
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
            this.classList.add("azure");
            console.log(i);
        })
        grid.append(cell);
    }

}