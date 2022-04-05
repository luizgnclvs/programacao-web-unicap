const body = document.getElementById("body");

function helloName() {
    let name = prompt("Insira seu nome");
    if (name != null) {
        alert(`Olá, ${name}!`);
    }
}

body.onload = helloName;