const { Router } = require("express")
const { getLivros, getLivro, addLivro, patchLivro, deleteLivroPorId } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', addLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivroPorId)

module.exports = router