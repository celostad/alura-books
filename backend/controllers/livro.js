const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivro } = require("../services/livro")


function getLivros(req, res) {
    try {
        // throw new Error ("Erro!") /* <- força erro - códigos https: https://http.dog/ */
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            idInvalido(res)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function addLivro(req, res) {
    try {
        const livroNovo = req.body

        if (req.body.id && req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            if (!req.body.id) {
                idInvalido(res, 'id')
            }

            if (!req.body.nome) {
                idInvalido(res, 'nome')
            }

        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send("Item modificado com sucesso")
        } else {
            idInvalido(res)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function deleteLivroPorId(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            excluiLivro(id)
            res.send("Livro apagado com sucesso")
        } else {
            idInvalido(res)
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

function idInvalido(res, post = false) {
    res.status(422)
    if (post) {
        res.send(`O campo ${post} é obrigatório`)
    }
    res.send("ID inválido")
}

module.exports = {
    getLivros,
    getLivro,
    addLivro,
    patchLivro,
    deleteLivroPorId
}