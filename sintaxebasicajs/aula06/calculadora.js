function calculadora() {
    const operacao = Number(prompt("escolha uma operação:\n1 - soma (+) \n2-subtração (-)\n3-multiplicação (*) \n4-divisão real (/)\n5-divisão inteira(%)\n6-potenciação(**) "));

    if (!operacao || operacao >= 7) {
        alert(`operacao invalida!`);
    }
    else
    {
    let n1 = Number(prompt("insira o primeiro valor: "));
    let n2 =Number( prompt("insira o segundo valor: "));
    let resultado;
    if(!n1||!n2){
        alert(`erro - parâmetros invalidos!`)
        calculadora()
    }
    else{
        function soma(){
            resultado = n1+n2;
            alert(`${n1} + ${n2} = ${resultado}`);
        }
        function subtracao(){
            resultado = n1-n2;
            alert(`${n1} - ${n2} = ${resultado}`);
        }
        function multiplicacao(){
            resultado = n1*n2;
            alert(`${n1} * ${n2} = ${resultado}`);
        }
        function divisaoReal(){
            resultado = n1/n2;
            alert(`${n1} / ${n2} = ${resultado}`);
        }
        function divisaoInteira(){
            resultado = n1%n2;
            alert(` o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        }
        function potenciacao(){
            resultado = n1**n2;
            alert(`${n1} elevado a ${n2} = ${resultado}`);
        }
        novaOperacao()
        function novaOperacao(){
            let opcao = prompt(`desea fazer outra operação?\n1-sim\n2-não `);
            if(opcao == 1){calculadora();}
            else if(opcao == 2){alert("ate mais!")}
            else{ alert("digite uma operação valida!");
                novaOperacao();}
        }
        // if(operacao == 1 ){
        //     soma()}
        // else if(operacao == 2 ){
        //     subtracao()}
        // else if(operacao == 3 ){
        //     multiplicacao()}
        // else if(operacao == 4 ){
        //     divisaoReal()}
        // else if(operacao == 5 ){
        //     divisaoInteira()}
        // else if(operacao == 6 ){
        //     potenciacao()}
        switch (operacao) {
            case 1:
                soma()
                break
            case 2:
                subtracao()
                break
            case 3:
                multiplicacao()
                break
            case 4:
                divisaoReal()
                break
            case 5:
                divisaoInteira()
                break
            case 6:
                potenciacao()
                break

        }
    }


}
}
calculadora();