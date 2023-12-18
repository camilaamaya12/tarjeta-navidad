function mostrarArbol() {
  const arbolito = document.querySelector('.arbolito');
  const snowflakes = document.querySelector('.snowflakes');
  const star = document.querySelector('.star');
  const l = document.createElement('div');
  // Mostrar el árbol de Navidad
  arbolito.style.display = 'block';
  star.style.display = 'block';
  const luz = document.createElement('div');

  // Agregar luces al árbol
  for (let i = 0; i < 65; i++) {
    const luz = document.createElement('div');
    luz.classList.add('luz');
    luz.style.backgroundColor = getRandomColor();
    luz.style.left = Math.random() * -2000 + '%';
    luz.style.top = Math.random() * 20000 + '%';
    luz.style.Right = Math.random() * 2000 + '%';
    luz.style.marginLeft = Math.random() * 1500 + '%';
    luz.style.marginRight = Math.random() * 10000 + '%';
    luz.style.marginTop = Math.random() * 5000 + '%';
    luz.style.marginBottom = Math.random() * 900 + '%';
    luz.style.marginBlock = Math.random() * 1610 + '%';

    arbolito.appendChild(luz);
    
  }

  // Agregar copos de nieve
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflakes.appendChild(snowflake);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}