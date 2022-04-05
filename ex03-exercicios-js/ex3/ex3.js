const body = document.getElementById("body");

function helloName() {
    let name = prompt("Insira seu nome");
    if (name = "") {
        let name = prompt("Insira seu nome");        
    } else {
        alert(`Olá, ${name}!`);
    }
}

body.onload = helloName;