const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../services/favorito")


function getFavoritos(req, res) {
    try {
        // throw new Error ("Erro!") /* <- força erro - códigos https: https://http.dog/ */
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function postFavorito(req, res) {
    try {

        const id = req.params.id

        insereFavorito(id)
        res.status(201)
        res.send("Livro favorito inserido com sucesso")

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            deletaFavoritoPorId(id)
            res.send("Favorito apagado com sucesso")
        } else {
            idInvalido(res)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function idInvalido(res) {
    res.status(422)
    res.send("ID inválido")
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}