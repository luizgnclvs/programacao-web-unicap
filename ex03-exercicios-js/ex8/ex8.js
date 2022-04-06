const inputMoney = document.getElementById("money");
const btPrint = document.getElementById("print");
const textBody = document.getElementById("text");

let bill200 = 0;
let bill100 = 0;
let bill50 = 0;
let bill20 = 0;
let bill10 = 0;
let bill5 = 0;
let bill2 = 0;
let coin1 = 0;
let coin50 = 0;
let coin25 = 0;
let coin10 = 0;
let coin5 = 0;
let coin001 = 0;

function zeroMoney() {
    bill200 = 0;
    bill100 = 0;
    bill50 = 0;
    bill20 = 0;
    bill10 = 0;
    bill5 = 0;
    bill2 = 0;
    coin1 = 0;
    coin50 = 0;
    coin25 = 0;
    coin10 = 0;
    coin5 = 0;
    coin001 = 0;
}

function printBills() {
    let money = parseFloat(inputMoney.value);
    zeroMoney();
    
    if (money >= 200) {
        bill200 = Math.floor(money / 200);
        money = money % 200;
    }

    if (money >= 100) {
        bill100 = Math.floor(money / 100);
        money = money % 100;
    }

    if (money >= 50) {
        bill50 = Math.floor(money / 50);
        money = money % 50;
    }

    if (money >= 20) {
        bill20 = Math.floor(money / 20);
        money = money % 20;
    }

    if (money >= 10) {
        bill10 = Math.floor(money / 10);
        money = money % 10;
    }

    if (money >= 5) {
        bill5 = Math.floor(money / 5);
        money = money % 5;
    }

    if (money >= 2) {
        bill2 = Math.floor(money / 2);
        money = money % 2;
    }

    if (money >= 1) {
        coin1 = Math.floor(money);
        money = money % 1;
    }

    if (money >= 0.5) {
        coin50 = Math.floor(money / 0.5);
        money = money % 0.5;
    }

    if (money >= 0.25) {
        coin25 = Math.floor(money / 0.25);
        money = money % 0.25;
    }

    if (money >= 0.1) {
        coin10 = Math.floor(money / 0.1);
        money = money % 0.1;
    }

    if (money >= 0.05) {
        coin5 = Math.floor(money / 0.05);
        money = money % 0.05;
    }

    if (money >= 0.01) {
        coin001 = Math.floor(money / 0.01);
        money = money % 0.01;
    }
    
    textBody.innerHTML = `
    <b>Notas de 200 reais:</b> \t${bill200}
    <b>Notas de 100 reais:</b> \t${bill100}
    <b>Notas de 50 reais:</b> \t\t${bill50}
    <b>Notas de 20 reais:</b> \t\t${bill20}
    <b>Notas de 10 reais:</b> \t\t${bill10}
    <b>Notas de 5 reais:</b> \t\t${bill5}
    <b>Notas de 2 reais:</b> \t\t${bill2}
    <b>Moedas de 1 real:</b> \t\t${coin1}
    <b>Moedas de 50 centavos:</b> \t${coin50}
    <b>Moedas de 25 centavos:</b> \t${coin25}
    <b>Moedas de 10 centavos:</b> \t${coin10}
    <b>Moedas de 5 centavos:</b> \t${coin5}
    <b>Moedas de 1 centavo:</b> \t${coin001}
    <hr>`

    inputMoney.value = "";
    inputMoney.focus();
}

btPrint.onclick = printBills;