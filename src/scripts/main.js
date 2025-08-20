// Este archivo contiene el código JavaScript para la landing page. Se encarga de la interactividad y la manipulación del DOM.

document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar la lógica de interactividad para tu landing page.
    console.log('Landing page cargada y lista para la interacción.');

    // Ejemplo de un evento de clic en un botón
    const button = document.getElementById('mi-boton');
    if (button) {
        button.addEventListener('click', () => {
            alert('¡Botón clickeado!');
        });
    }
});