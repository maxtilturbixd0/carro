
// Selecciona el carrito flotante
const carritoFlotante = document.getElementById('carrito-flotante'); 
carritoFlotante.style.display = 'none'; // Oculta el carrito inicialmente

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    // Aquí se agregarían los detalles del producto al carrito (ajusta según tu implementación)
    // ...

    // Muestra el carrito flotante cuando se agrega un producto
    carritoFlotante.style.display = 'block';
}

// Función para vaciar el carrito y ocultarlo
function vaciarCarrito() {
    // Aquí vaciarías los productos del carrito (ajusta según tu implementación)
    // ...

    // Oculta el carrito flotante cuando se vacía
    carritoFlotante.style.display = 'none';
}

const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      pedidosLink = document.getElementById('pedidosLink');

// Evento para alternar la visibilidad de la barra lateral
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// Función para cambiar entre modos claro y oscuro
function toggleDarkMode() {
    body.classList.toggle("dark");
    updateModeText();
}

// Actualizar el texto del modo claro/oscuro
function updateModeText() {
    if (body.classList.contains("dark")) {
        modeText.innerHTML = '<span class="underline">M</span>odo Oscuro';
    } else {
        modeText.innerHTML = '<span class="underline">M</span>odo Claro';
    }
}

// Evento para cambiar entre modos claro y oscuro
modeSwitch.addEventListener("click", () => {
    toggleDarkMode();
});

// Evento para cambiar modo con Control + M
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'm') {
        event.preventDefault();
        toggleDarkMode();
    }
});

// Evento para redirigir a la página de pedidos con Control + P
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();  // Evita que se guarde la página
        window.location.href = pedidosLink.href;
    }
});

// Inicializar el texto del modo al cargar la página
updateModeText();