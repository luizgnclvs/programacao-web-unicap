const body = document.getElementById("body");

function helloName() {
    let name = prompt("Insira seu nome");
    alert(`Olá, ${name}!`);
}

body.onload = helloName;