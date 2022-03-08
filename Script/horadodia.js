function carregar () {
  var hora = document.getElementById('hora')
  var imgem = document.getElementById('imagen')
  var corpo = document.getElementById('corpo')
  var bady = document.getElementById('tete')
  var h =  11
  hora.innerHTML = `Agora são ${h} horas`
  
  if ( h <= 12) {
    imgem.src = 'imagens/dia.png'
    corpo.style.background = '#FFFA9E' 
    bady.style.background = 'black'
    
  }else if (h <= 18 ) {
    imgem.src = 'imagens/tarde.png'
    corpo.style.background = '#FFB987'
  }
  else {
    imgem.src = 'imagens/noite.png'
    corpo.style.background = '#8A8A8A'
  }
}
function test () {
  var corpo = document.getElementById('corpo')
  corpo.style.background = 'black'

}