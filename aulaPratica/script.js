function doisNumeros(n1, n2) {
    const perguntaPrimeira = primeiraPergunta;
    const perguntaSegunda = segundaPergunta;
}
function primeiraPergunta(n1, n2) {
    let pergunta1 = `os numeros ${n1} e ${n2} `;
    let simNao = `não`;
    if (n1 === n2) {
        simNao = "";

    }
    return `${pergunta1} ${simNao} são iguais.`
}
function segundaPergunta(n1, n2) {
    const soma = n1 + n2;
    let CompararDez = `menor`;
    let compararVinte = `maior`;
    if(soma > 10){
        CompararDez = `maior`
    }
    if(soma > 20){
        compararVinte = `maior`

    }
    return `Sua soma é ${soma}, que é ${CompararDez} do que 10 e ${CompararDez} do que 20.`;
}

console.log(10,10)