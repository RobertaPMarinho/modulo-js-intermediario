// console.log(document) - serve para mostrar toda árvore no navegador

let p = document.getElementById('paragrafo1')

console.log(p)

let inputsPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputsPorClasse[1])

let inputPorTag = document.getElementsByTagName('input')

console.log(inputPorTag)

let inputPorNome = document.querySelectorAll("input[name= 'email']")

console.log(inputPorNome)