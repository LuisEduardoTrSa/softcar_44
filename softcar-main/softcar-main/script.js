// VARIÁVEL COM MENSAGEM DE BOAS-VINDAS
let MENSAGEM_BOAS_VINDAS = "Bem-vindo à SOFTCAR! Confira nossas ofertas especiais.";

// VARIÁVEL PARA O CONTADOR DE INTERAÇÕES
let CONTADOR_CLIQUES = 0;

// AUTOMATIZAÇÃO DE EVENTO DE CARREGAMENTO DA PÁGINA
window.onload = function() {
    console.log(MENSAGEM_BOAS_VINDAS);
};

// FUNÇÃO AUTOMATIZADA PARA NOTIFICAÇÃO AO CLICAR EM BOTÕES
function alertarInteracao(nomeItem) {
    // VARIÁVEL PARA REGISTRAR O ITEM SELECIONADO
    let ITEM_SELECIONADO = nomeItem;
    
    CONTADOR_CLIQUES++;
    alert("Você selecionou: " + ITEM_SELECIONADO + "\nTotal de interações: " + CONTADOR_CLIQUES);
}