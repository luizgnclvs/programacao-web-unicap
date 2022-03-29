const inputNum = document.getElementById("inputNum");
const insert1 = document.getElementById("btInsert1");
const insert2 = document.getElementById("btInsert2");
const clean = document.getElementById("btClean");
const inputIndex = document.getElementById("inputIndex");
const remove = document.getElementById("btRemoveItem");
const list = document.getElementById("list");

let numbers = [];

function showList() {
    list.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {               
        list.innerHTML += `<li>${numbers[i]}</li>`;
    }
}

function insertNumberBottom() {
    let number = parseInt(inputNum.value);
    if (!isNaN(number)) {
        numbers.push(number);
        showList();      
        inputNum.value = "";
    }
    inputNum.focus();
}

function insertNumberTop() {
    let number = parseInt(inputNum.value);
    if (!isNaN(number)) {
        numbers.unshift(number);
        showList();   
        inputNum.value = "";
    }
    inputNum.focus();
}

function cleanList() {
    list.innerHTML = "";
    inputNum.value = "";
    numbers = [];
    inputNum.focus();
}

function removeItem() {
    let index = parseInt(inputIndex.value);
    if (index < 1 || index > numbers.length) {
        alert("O Índice inserido NÃO é válido!")
        inputIndex.value = "";
        inputIndex.focus();        
    } else {
        numbers.splice((index - 1), 1);
        list.innerHTML = "";
        showList();   
        inputIndex.value = "";
        inputNum.focus();
    }
}

insert1.onclick = insertNumberTop;
insert2.onclick = insertNumberBottom;
clean.onclick = cleanList;
remove.onclick = removeItem;