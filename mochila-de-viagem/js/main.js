const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

/* Verifica se tem itens no localStorage senão cria um array vazio */
/* JSON.parse: Transformando os dados recebidos em JSON.stringify para o javascript */
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
})

/* addEventListener:: Os dados escritos são enviados após a ação de clicar no botão  */
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    /* Perguntamos se o elemento ja existe */
    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    /* Se o nome e encontrado atualiza o elemento, senao cria o elemento do zero */
    if (existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        
        /* Se meu elemento ja existe eu so troco o conteudo */
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
        
    }else{
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }

    /* Aqui ele grava as informacoes no proprio navegador */
    /* localStorage: so armazena dados do tipo string */
    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
    
})

function criaElemento(item){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id


    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)

}

function atualizaElemento(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function(){
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id){
    tag.remove()

    /* splice: Para remover um item' */
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    
    localStorage.setItem("itens", JSON.stringify(itens))
}



