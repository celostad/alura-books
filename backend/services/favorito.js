const fs = require("fs")
const arquivoLivros = "livros.json"
const arquivoFavoritos = "favoritos.json"

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync(arquivoFavoritos))
}

function insereFavorito(id) {

    const livros = JSON.parse(fs.readFileSync(arquivoLivros))
    const favoritos = JSON.parse(fs.readFileSync(arquivoFavoritos))

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [ ...favoritos, livroInserido]
    fs.writeFileSync(arquivoFavoritos, JSON.stringify( novaListaDeLivrosFavoritos ))
}

function deletaFavoritoPorId(id) {

    const favoritos = JSON.parse(fs.readFileSync(arquivoFavoritos))
    const favoritosFiltrados = favoritos.filter(favorito => favorito.id !== id)
    fs.writeFileSync(arquivoFavoritos, JSON.stringify( favoritosFiltrados ))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    deletaFavoritoPorId
}