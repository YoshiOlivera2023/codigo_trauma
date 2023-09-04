// Variables para almacenar el elemento arrastrado y el contenedor de destino
let draggedItem = null;

// Agregar eventos para elementos arrastrables
document.querySelectorAll('.item-card').forEach(itemCard => {
    itemCard.addEventListener('dragstart', (e) => {
        draggedItem = itemCard;
        e.dataTransfer.setData('text', ''); // Necesario para el arrastre en Firefox
    });

    itemCard.addEventListener('dragend', () => {
        draggedItem = null;
    });
});

// Agregar eventos para el card derecho
document.getElementById('rightCard').addEventListener('dragover', (e) => {
    e.preventDefault(); // Asegura que el elemento se pueda soltar en este contenedor
});

document.getElementById('rightCard').addEventListener('drop', (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del navegador
    if (draggedItem) {
        e.target.appendChild(draggedItem);
    }
});

// Agregar eventos para el card izquierdo (puedes hacer lo mismo que en el card derecho)
document.getElementById('leftCard').addEventListener('dragover', (e) => {
    e.preventDefault(); // Asegura que el elemento se pueda soltar en este contenedor
});

document.getElementById('leftCard').addEventListener('drop', (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del navegador
    if (draggedItem) {
        e.target.appendChild(draggedItem);
    }
});
