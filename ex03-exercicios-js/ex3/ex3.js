const body = document.getElementById("body");

function helloNameNotNull() {
    let name = prompt("Insira seu nome");
    while (name === "") {
        name = prompt("Insira seu nome");
    }   
    alert(`Olá, ${name}!`);
}

body.onload = helloNameNotNull;