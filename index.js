//chamada de área de entrada de texto
var textoEntrada = document.querySelector ("#texto-area");

//chamada de área de saida de texto
var textoSaida = document.querySelector("#texto-convertido");

//chamada de alerta de texto copiado
var mensCopiado = document.querySelector("#mensagem-copiado");

//chamada de botao copiar
var botaoCopiar = document.querySelector (".botao-copiar");

// chamada de botao descriptografar
var botaoDescripto = document.querySelector (".botao-descriptografar");

// chamada de botao criptografar
var botaoCripto = document.querySelector (".botao-criptografar");

function cripto (){

    var textoDigitado = textoEntrada.value 
    var textoVazio = ""

    var regExp = /[^a-z- 0-9]/g;

    if (textoDigitado.match (regExp)){

        alert ("Apenas letras minúsculas e sem acento...")



    } else {

                        //criptografando
                        var sub0 = textoDigitado.replace (/e/g,"enter")
                        var sub1 = sub0.replace (/i/g,"imes")
                        var sub2 = sub1.replace (/a/g,"ai")
                        var sub3 = sub2.replace (/o/g,"ober")
                        var sub4 = sub3.replace (/u/g,"ufat")
                    
                        //saida de texto ja criptografado
                        textoSaida.textContent = sub4;
                    
                        return sub4

        

    }

}

function descriptografar (){

    var textoDigitado = textoEntrada.value 
    var textoVazio = ""

    var regExp = /[^a-z- 0-9]/g;

    if (textoDigitado.match (regExp)){

        alert ("Apenas letras minúsculas e sem acento...")
    
    } else {

    //descriptografando
        var sub = textoDigitado.replace(/ai/g,"a");
        var sub1 = sub.replace(/enter/g,"e");
        var sub2 = sub1.replace (/imes/g,"i");
        var sub3 = sub2.replace(/ober/g,"o");
        var sub4 = sub3.replace(/ufat/g,"u");

        //saida de texto ja criptografado
        textoSaida.textContent = sub4;
    
        return sub4
    

    }
}

async function textoCopiado() {
    var texto = textoSaida.value;
    await navigator.clipboard.writeText(texto);
    spanTexto()
}

// alerta de texto copiado apagado da tela
function spanEmBranco (){
    mensCopiado.innerHTML = ""
    
}

//alerta de texto copiado aparente na tela
function spanTexto (){

    if(textoSaida.textContent == ""){

        mensCopiado.innerHTML = "Insira um texto"
        setTimeout (spanEmBranco,3000)

    } else{

        mensCopiado.innerHTML = "Copiado!!!!"
        setTimeout (spanEmBranco,3000)
    }

}

// ação do botão copiar
botaoCopiar.addEventListener("click", textoCopiado)

// ação do botão criptografar
botaoCripto.addEventListener("click",cripto)

// ação do botão decriptografar
botaoDescripto.addEventListener("click",descriptografar)








