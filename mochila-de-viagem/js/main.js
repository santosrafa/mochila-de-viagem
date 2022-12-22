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

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual)

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

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)

}