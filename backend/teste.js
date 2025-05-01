const fs = require("fs")

const arquivo = "livros.json"
const lerDados = JSON.parse(fs.readFileSync(arquivo))
//const novoDado = {id:'3', nome: 'Livro 3'}

// fs.writeFileSync(arquivo, JSON.stringify([...lerDados, novoDado]))

console.log(lerDados)