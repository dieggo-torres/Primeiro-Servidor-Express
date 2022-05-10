const express = require('express')
const porta = 3000

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Olá, mundo!</h1>')
})

app.get('/contato', (req, res) => {
  res.send('Entre em contato comigo por meio deste e-mail: dgmouratorres@gmail.com')
})

app.get('/sobre', (req, res) => {
  res.send('Meu nome é Diego. Desejo me tornar um Desenvolvedor Web Full Stack.')
})

app.get('/hobbies', (req, res) => {
  res.send('<ul><li>Programação</li><li>Café</li><li>Vendas</li></ul>')
})

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}.`);
})
