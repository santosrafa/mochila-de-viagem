const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

/* Verifica se tem itens no localStorage senão cria um array vazio */
/* JSON.parse: Transformando os dados recebidos em JSON.stringify para o javascript */
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach(elemento => {
  console.log (elemento.nome, elemento.quantidade)  
})


/* addEventListener:: Os dados escritos são enviados após a ação de clicar no botão  */
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)
    

    /* Aqui ele grava as informacoes no proprio navegador */
    /* localStorage: so armazena dados do tipo string */
    localStorage.setItem("itens", JSON.stringify(itens))
}