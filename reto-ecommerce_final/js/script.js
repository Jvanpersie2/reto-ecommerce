// Almacena los productos seleccionados en localStorage
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} se añadió al carrito`);
}

// Cargar el carrito en cart.html
if (window.location.pathname.includes('cart.html')) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    const totalContainer = document.getElementById('total');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const productElement = document.createElement('p');
            productElement.textContent = `${item.productName} - $${item.price}`;
            cartContainer.appendChild(productElement);
            total += item.price;
        });
        totalContainer.textContent = total;
    }
}

//Este es el CAROUSEL
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});