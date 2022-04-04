const table = document.getElementById("list");
const inputNumbers = document.getElementById("numbers");
const inputColumns = document.getElementById("columns");
const inputMin = document.getElementById("min");
const inputMax = document.getElementById("max");
const btGenerate = document.getElementById("generate");

function generateNumbers() {
    let numbers = parseInt(inputNumbers.value);
    let columns = parseInt(inputColumns.value);
    let min = parseInt(inputMin.value);
    let max = parseInt(inputMax.value);

    table.innerHTML = "";   

    for (let i = 0; i < numbers; i++) {
        if (i % columns === 0) {
            table.innerHTML += "\n";
        }
        table.innerHTML += `\t${Math.floor(Math.random() * (max - min + 1) ) + min}`;
    }

    inputNumbers.value = "";
    inputColumns.value = "";
    inputMin.value = "";
    inputMax.value = "";
}

btGenerate.onclick = generateNumbers;