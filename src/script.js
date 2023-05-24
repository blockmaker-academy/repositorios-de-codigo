const boton_1 = document.getElementById('cambiarColor_1')

boton_1.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.style.backgroundColor = 'yellow'
})

const boton_2 = document.getElementById('cambiarColor_2')

boton_2.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.style.backgroundColor = 'blue'
})