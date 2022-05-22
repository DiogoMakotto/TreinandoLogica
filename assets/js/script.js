function sorteio(){
    return Math.round(Math.random() * 10);
}

function sorteioNumeros(quantidade){
        
    var arrSegredos = [];
    //array inicia do número 0, var recebe a quantidade de valores dentro do array
    var numero = 1; 
    //var numero funciona como o index de um looping
        while (numero <= quantidade){
            
            var numeroAleatorio = sorteio();
            
            if(numeroAleatorio !== 0) {

                var achou = false;

                for(var posicao = 0; posicao <= arrSegredos.length; posicao++) {

                    if(arrSegredos[posicao] == numeroAleatorio) {
                        achou = true;
                        break;
                    }
                }

                if(achou == false) {
                    arrSegredos.push(sorteio());
                    numero++;
                }
            }
            
           
        }

        return arrSegredos;
    }

    var numerosSecretos = sorteioNumeros(4); //dentro do parenteses coloque a quantidade desejada de numeros
      
    var input = document.querySelector("input");
    //document.querySelector serve para ancorar o input do html para dentro da sessão de JavaScript 
    input.focus();
    //ao iniciar a pagina já foca na caixa de input

    function verificaPreenchimento(){
        
        var achouSecredo = false;
        //boolean para filtrar qual mensagem ele exibirá 
        for(var index = 0; index<=numerosSecretos.length; index++){
            //lopping para percorrer todos valores do array, .length retorna a quantidade da variavel dos numeros secretos
        if(input.value == numerosSecretos[index]) {
            alert("Você ACERTOU!!!");
            achouSecredo = true;
            break;
        } 
        if(achouSecredo == false){
            alert("Você ERROU!!!");
        }
       
        input.value = "";
        //reseta o valor da caixa de input 
        input.focus();
        //foca o valor da caixa de input para preencher novamente 
    }
    }
    //essa função verificará o preenchimento do valor do secredo e vai comparar com o número secreto

    var button = document.querySelector("button");
    button.onclick = verificaPreenchimento;
    //document.querySelector ancora o botão do html e o button.onclick executa a função ao clicar
