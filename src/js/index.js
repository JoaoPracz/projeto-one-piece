//OBJETIVO  1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado.
    // Passo 1: Pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles 
    //passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
    //Passo 3 - Verificar se ja existe um botão selecionado, e se sim, devemos remover a seleção dele.

//OBJETIVO 2 - Quando clicar no botão do personagem, mostrar as informações do personagem.
    //Passo 1 - Pegar os personagens no JS pra poder mostrar ou esconder ele
    //Passo 2 - Adicionar a classe "selecionado" no personagem que o usuario selecionou
    //Passo 3 - Verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele.
    
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{

        desselecionarBotao();
        desselecionarPersonagem();
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    });
});


function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
