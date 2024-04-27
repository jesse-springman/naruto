let botoes = document.querySelectorAll('.botao')
let fundo = document.querySelectorAll('.personagem')


botoes.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
    removerSelecaoDoPersonagem();
    desseelecionarPersonagem();

    
     fundo[index].classList.add
     ('selecionado')  ; 

    botoes[index].classList.add('clicado')
    })
})







function removerSelecaoDoPersonagem(){
   
    const botaoClicado = document.querySelector('.clicado')
    botaoClicado.classList.remove('clicado')
}

function desseelecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');

    personagemSelecionado.classList.remove('selecionado');
}
