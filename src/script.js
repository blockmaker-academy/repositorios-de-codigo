const boton_1 = document.getElementById('cambiarColor_1')

boton_1.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.style.backgroundColor = 'yellow'
})
