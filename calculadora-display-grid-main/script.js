function adicionarCaracter(caracter){
    const valorDisplay = document.querySelector(".display").value;
    document.querySelector(".display").value = valorDisplay + caracter;
}

function limpaTela(){
    document.querySelector(".display").value = "";
}

function calcular(){
    const valorDisplay = document.querySelector(".display").value;
    
    try {
        // Validação de segurança: permite apenas números, operadores básicos, pontos e parênteses
        if (/[^0-9+\-*/().]/.test(valorDisplay)) {
            throw new Error("Expressão inválida");
        }

        // Utiliza Function em vez de eval para isolar o escopo de execução matemática
        const resultado = Function('"use strict"; return (' + valorDisplay + ')')();
        document.querySelector(".display").value = resultado;
    } catch (error) {
        document.querySelector(".display").value = "Erro";
    }
}

function inverterNumero(){
    const valorDisplay = document.querySelector(".display").value;
    if (valorDisplay) {
        document.querySelector(".display").value = String(Number(valorDisplay) * -1);
    }
}