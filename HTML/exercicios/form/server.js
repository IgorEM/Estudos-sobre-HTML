//backend, usando dependencias express e bodyparser
//npm init -y criar o package json
// npm i -- save express@4.16.3 body-parser@1.18.2 -E
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//req.body todas as informaçoes no post
//req.query get
app.use(bodyParser.urlencoded({extended: true}))
//função middeware (req, resp, next)
app.post('/usuarios',(req, resp)=>{
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.post('/usuarios/:id',(req, resp)=>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3003)
