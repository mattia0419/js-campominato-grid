const buttonGenerator = document.getElementById("generator");

const grid = document.getElementById("griglia");

buttonGenerator.addEventListener("click", function(){
    generaGriglia();
})



function generaGriglia(){
    for(let i = 1; i <= 100; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = i;
        cell.addEventListener("click", function(){
            this.classList.add("azure");
            console.log(i);
        })
        grid.append(cell);
    }

}