function contar() {
  var binicio = document.getElementById('binicio')
  var bfim = document.getElementById('bfim')
  var bpasso = document.getElementById('bpasso')
  var res = document.getElementById('res')
  var fim = Number(bfim.value)
  var inicio = Number(binicio.value)
  var passo = Number(bpasso.value)
  var ress = document.getElementById('ress')

  if (inicio > fim) {
    window.alert('[Erro] numero de inicio maior que de fim')
  }

  if (passo <= 0) {
    window.alert('passo invalido! considerando Passo 1')
    passo = 1
  }

  while (inicio <= fim) {
    res.innerHTML += ` &#x1F449 ${inicio}` /*adicionar emoji */
    inicio = inicio + passo
  }

  ress.innerHTML = `contando de ${passo} em ${passo}!`
}

/* res.innerHTML = `tesnaod o inicio ${inicio} o fim ${fim} e o passo ${passo}`

for (var c = 1; c <= 6; c++) {
  console.log(`passo ${c}`)
}

var c = 1
while (c <= 6) {
  console.log(`passo ${c}`)
  c++
}
*/
