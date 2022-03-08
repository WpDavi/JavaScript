function soma(n1 = 0, n2 = 0) {
  return n1 + n2
}
console.log(soma(7, 2))

function parimpar(n) {
  if (n % 2 == 0) {
    return 'par!'
  } else {
    return 'Impar!'
  }
}
console.log(`teste ${parimpar(4)}`)
