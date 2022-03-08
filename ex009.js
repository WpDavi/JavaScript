/*'for' e para e 'in' e dentro

var valroes = [5, 8, 2, 9, 3]
for (var pos=0 in valroes) {
  console.log (`A posição ${pos} tem o valor ${valroes[pos]}`)
  
}


------------------------------------------------------

var valroes = [5, 8, 2, 9, 3]

for (var pos=0; pos < valroes.length; pos++) {
  console.log (`A posição ${pos} tem o valor ${valroes[pos]}`)
}

----------------------------------------------------------------------------
var num = [5, 8, 2, 9, 3]
num.sort() /* esse organizar em ordem os numers*/
num.push(1) /*para adicionar um vetor na ultima casa*/
console.log(`mostrar os vetores ${num} `)
console.log(`quantidade de vetores ${num.length} `)
console.log(`saber o valor na casa desejada ${num[0]}`)
var chave = num.indexOf(8)
console.log(
  `o indexOf serve para descobrir e qual posição o numero ta. ex ${chave}`
)
