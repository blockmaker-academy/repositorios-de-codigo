c# Práctica de Repositorios de Código

## Pasos a seguir:

### Haz un fork del repositorio original:

1. Entra en la página del repositorio original en GitHub.
2. Haz clic en el botón "Fork" en la esquina superior derecha de la página.
3. Selecciona tu cuenta de GitHub como destino del fork.
4. Espera a que se complete el proceso de fork.
5. Una vez que se haya completado, tendrás tu propia copia del repositorio en tu cuenta de GitHub.

### Clona tu copia del repositorio en tu computadora:

1. Abre la terminal en tu computadora.
2. Navega hasta la carpeta donde deseas clonar el repositorio.
3. Copia la URL de tu fork del repositorio desde GitHub.
4. Ejecuta el comando `git clone <URL del repositorio>` para clonar tu copia del repositorio en tu computadora.

### Realiza cambios sugeridos en el código:

1. Abre los archivos HTML, CSS y JavaScript en tu editor de código preferido.
2. Lee las instrucciones y tareas proporcionadas al final de este archivo README.md
3. Realiza los cambios sugeridos en el código para completar las tareas.

### Realiza commits:

1. Abre la terminal y navega hasta la carpeta del repositorio en tu computadora.
2. Ejecuta el comando `git add <nombre del archivo>` para agregar los archivos que has modificado o el comando `git add .` para agregar todos los cambios.
3. Ejecuta el comando `git commit -m "Mensaje de commit"` para realizar un commit con un mensaje breve y descriptivo de los cambios que has realizado.

### Realiza push:

1. Ejecuta el comando `git push` para enviar tus cambios a tu fork del repositorio en GitHub.

### Realiza una solicitud de pull request:

1. Entra en la página del repositorio original en GitHub.
2. Haz clic en el botón "New pull request".
3. Selecciona tu fork del repositorio como la rama "head".
4. Selecciona la rama "main" del repositorio original como la rama "base".
5. Compara los cambios y asegúrate de que todo esté correcto.
6. Escribe una descripción breve y descriptiva de los cambios que has realizado.
7. Haz clic en el botón "Create pull request".

## Tareas

Utiliza el código HTML, CSS y JavaScript proporcionado para completar las siguientes tareas:

1. En el archivo index.html, pega el siguiente código para añadir un nuevo botón para cambiar el color de fondo a azul:

```html
<button id="cambiarColor_2">Haz clic para cambiar el color de fondo a Azul</button>
```

2. En el archivo script.js, pega el siguiente código para añadir la lógica que cambiará el color de fondo a azul:

```js
const boton_2 = document.getElementById('cambiarColor_2')

boton_2.addEventListener('click', () => {
  const body = document.querySelector('body')
  body.style.backgroundColor = 'blue'
})
```

### ¡Diviértete practicando con los conceptos fundamentales de los repositorios de código!
