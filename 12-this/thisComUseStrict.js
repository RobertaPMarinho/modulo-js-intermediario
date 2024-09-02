'use strict'

// console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Ricardo'

// function saudar() {
//   console.log('this no contexto da funcao', this)
//   console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//   nome: 'Ricardo',
//   saudar: function() {
//     console.log('this no contexto do método', this)

//     console.log('this.nome no contexto do método', this.nome)
//   }
// }

// usuario.saudar()

let comida = {
  nome: 'Brócolis',
  temperatura: 0,
  cozinhar: function(temperaturaDeCozimento) {
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento
  }
}

comida.cozinhar(100)

console.log(comida)
