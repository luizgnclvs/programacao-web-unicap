const inputMoney = document.getElementById("money");
const btPrint = document.getElementById("print");
const textBody = document.getElementById("text");

let wallet = [[200, 0], [100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0], [1, 0], [0.50, 0], [0.25, 0], [0.10, 0], [0.05, 0], [0.01, 0]];

function cleanWallet() {
    for (let i = 0; i < wallet.length; i++) {
        wallet[i][1] = 0;
    }
}

function warning() {
    alert("Atente-se ao fato de que, caso inseridas mais que duas casas decimais, o valor será arredondado para o número com dois decimais mais próximo");
}

function printBills() {
    let money = (parseFloat(inputMoney.value)).toFixed(2);
    cleanWallet();
    
    textBody.innerHTML = "";
    textBody.innerHTML += `<span style="font-size: large;"><b>Valor inserido:</b> R$ ${money}</span>\n\n`

    for (let i = 0; i < wallet.length; i++) {
        if (i == wallet.length - 1) {
            money = Math.round(money * 100) / 100;
            wallet[i][1] = money / wallet[i][0];
        } else if (money >= wallet[i][0]) {
            wallet[i][1] = Math.floor(money / wallet[i][0]);
            money = money % wallet[i][0];
        }
        console.log(money, wallet[i][0], wallet[i][1]);
    }

    for (let i = 0; i < wallet.length; i++) {
        if (i < 7) {
            textBody.innerHTML += `Notas de R$ ${wallet[i][0].toFixed(2)} reais: \t<b>${wallet[i][1]}</b>\n`
        } else if (i == 7) {
            textBody.innerHTML += `Moedas de R$ ${wallet[i][0].toFixed(2)} real: \t<b>${wallet[i][1]}</b>\n`
        } else if (i < 12) {
            textBody.innerHTML += `Moedas de R$ ${wallet[i][0].toFixed(2)} centavos: \t<b>${wallet[i][1]}</b>\n`
        } else {
            textBody.innerHTML += `Moedas de R$ ${wallet[i][0].toFixed(2)} centavo: \t<b>${wallet[i][1]}</b>\n`
        }
    }

    textBody.innerHTML += "<hr>",
    inputMoney.value = "";
    inputMoney.focus();
}

btPrint.onclick = printBills;
inputMoney.onclick = warning;