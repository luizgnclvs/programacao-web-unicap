const inputNum1 = document.getElementById("number1");
const inputNum2 = document.getElementById("number2");
const btCalculate = document.getElementById("calculate");
const textBody = document.getElementById("text");

function calculations() {
    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);

    textBody.innerHTML = `<b>Soma:</b>\t\t${num1} + ${num2} = ${num1 + num2} 
    \n<b>Subtração:</b>\t${num1} - ${num2} = ${num1 - num2} 
    \n<b>Multiplicação:</b>\t${num1} × ${num2} = ${num1 * num2} 
    \n<b>Divisão:</b>\t${num1} ÷ ${num2} = ${num1 / num2} 
    \n<b>Potenciação:</b>\t${num1}<sup>${num2}</sup> = ${Math.pow(num1, num2)}
    <hr>`

    inputNum1.value = "";
    inputNum2.value = "";

    inputNum1.focus();
}

btCalculate.onclick = calculations;