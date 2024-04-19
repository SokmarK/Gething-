
let imagen = document.querySelectorAll('.animacion-movimiento');


imagen.forEach((elemento) => {
    elemento.addEventListener('mouseover', () => {
        elemento.classList.add('animate__animated', 'animate__pulse');
    });

    elemento.addEventListener('mouseout', () => {
        elemento.classList.remove('animate__pulse');

    });

}) 