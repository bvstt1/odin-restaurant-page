import "./css/styles.css"; // Estilos base

const homeImage = document.getElementById('home-image');
const content = document.getElementById('content');
const menuButton = document.getElementById('menu-button');
const homeButton = document.getElementById('home-button');
const reservacionesButton = document.getElementById('reservaciones-button');

menuButton.addEventListener('click', async () => {
  content.style.display = 'block';
  await import('./css/menu.css'); // Carga y aplica automáticamente
  homeImage.classList.add('hidden');
  content.innerHTML = `
    <h1>Menu</h1>
    <p>Here is our delicious menu!</p>
    <ul>
        <li>Helado</li>
        <li>Helado de fresa</li>
        <li>Helado de chocolate</li>
        <li>Helado de vainilla</li>
        <li>Helado de mango</li>
    </ul>
    <p>¡Disfruta de nuestros sabores únicos!</p>
  `;
});

homeButton.addEventListener('click', async () => {
  homeImage.classList.remove('hidden');
  content.innerHTML = "";
  content.style.display = 'none';
});

reservacionesButton.addEventListener('click', async () => {
  content.style.display = 'block';
  await import('./css/reservaciones.css'); // carga estilos de reservaciones
  homeImage.classList.add('hidden');
  content.innerHTML = `
    <h1>Reservaciones</h1>
    <p>Para hacer una reservación, por favor llame al 123-456-7890.</p>
  `;
});
