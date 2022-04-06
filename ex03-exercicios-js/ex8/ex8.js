const inputMoney = document.getElementById("money");
const btPrint = document.getElementById("print");
const textBody = document.getElementById("text");

let wallet = [[200, 0], [100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0], [1, 0], [0.50, 0], [0.25, 0], [0.10, 0], [0.05, 0], [0.01, 0]];

function cleanWallet() {
    for (let i = 0; i < wallet.length; i++) {
        wallet[i][1] = 0;
    }
}

function printBills() {
    let money = parseFloat(inputMoney.value);
    cleanWallet();
    
    textBody.innerHTML = "";
    textBody.innerHTML += `<b>Valor inserido:</b> R$ ${money}\n\n`

    for (let i = 0; i < wallet.length; i++) {
        if (money >= wallet[i][0]) {
            wallet[i][1] = (Math.floor(money / wallet[i][0]));
            money = money % wallet[i][0];
        }
    }

    for (let i = 0; i < wallet.length; i++) {
        if (i < 7) {
            textBody.innerHTML += `Notas de ${wallet[i][0]} reais: <b>${wallet[i][1]}</b>\n`
        } else {
            textBody.innerHTML += `Moedas de ${wallet[i][0]} centavos: <b>${wallet[i][1]}</b>\n`
        }
    }    

    inputMoney.value = "";
    inputMoney.focus();
}

btPrint.onclick = printBills;