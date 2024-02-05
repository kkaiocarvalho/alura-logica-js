let tamanhoMaximo = prompt('Insira o tamanho do numero secreto: ');
let numeroSecreto = parseInt(Math.random()  * tamanhoMaximo);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

alert('Bem vindo ao jogo do Número Secreto!');

//enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${tamanhoMaximo}: `); 

    // se o chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break;
    // Senão
    } else {
        if(chute > numeroSecreto ){
            alert(`O número secreto é menor que o chute ${chute}`);
        } else {
            alert(`O número secreto é maior que o chute ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);