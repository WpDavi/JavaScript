function calcular() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  var foto = document.getElementById('foto')  
  
  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    Number(fano.value) < 1900
  ) {
    window.alert('[ERRO] Verifique os dados e tente novamente!!')
  } else {
    var fsex = document.getElementsByName('sex')
    var idade = ano - Number(fano.value)
    var genero = ''
  }  if (fsex[1].checked) {
    genero = 'Homem'    
    if (idade < 3){
      foto.src = 'imagens/bebeh.png'
      res.innerHTML = `e um bebe de ${idade} anos` /*caso quera algo mais personalisado */
    } else if (idade < 13){
      foto.src = 'imagens/criançah.png'
    } else if (idade < 25){
      foto.src = 'imagens/jovenh.png'
    } else if (idade < 61){
      foto.src = 'imagens/adultoh.png'
    }else if (idade < 1000){
      foto.src = 'imagens/idosoh.png'
    } 
  }

  else if (fsex[0].checked) {
    genero = 'mulher'
    if (idade < 3){
      foto.src = 'imagens/bebem.png'
    } else if (idade < 13){
      foto.src = 'imagens/criançam.png'
    } else if (idade < 25){
      foto.src = 'imagens/jovemm.png'
    } else if (idade < 61){
      foto.src = 'imagens/adultom.png'
    }else if (idade < 1000){
      foto.src = 'imagens/idosam.png'
    } 
  } 
  res.innerHTML = `Foi detectado ${genero} com idade de ${idade}`
  
}
