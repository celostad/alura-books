const fs = require("fs")
const arquivo = "livros.json"

function getTodosLivros() {
    return JSON.parse(fs.readFileSync(arquivo))
}

function getLivroPorId(id) {

    const livros = JSON.parse(fs.readFileSync(arquivo))
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {

    const livros = JSON.parse(fs.readFileSync(arquivo))
    const novaListaDeLivros = [ ...livros, livroNovo]
    fs.writeFileSync(arquivo, JSON.stringify( novaListaDeLivros ))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync(arquivo))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}
    // exemplo: livrosAtuais[indiceModificado] -> {id: "2", nome: "livro irado"}
    // modificacoes -> {nome: "nome mucho legal"}

    livrosAtuais[indiceModificado] = conteudoMudado
    fs.writeFileSync(arquivo, JSON.stringify( livrosAtuais ))
}

function excluiLivro(id) {

    const livros = JSON.parse(fs.readFileSync(arquivo))
    const livrosFiltrados = livros.filter(livro => livro.id !== id)
    fs.writeFileSync(arquivo, JSON.stringify( livrosFiltrados ))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    excluiLivro
}