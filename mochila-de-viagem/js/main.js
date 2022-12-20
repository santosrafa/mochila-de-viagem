const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")


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

    /* Aqui ele grava as informacoes no proprio navegador */
    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", quantidade)
}