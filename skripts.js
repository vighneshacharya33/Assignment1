let cart = [];
let total = 0;

function addToCart(cake, price) {
    cart.push({cake: cake, price: price});
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += <p>${item.cake}: $${item.price}</p>;
    });
    
    cartTotal.textContent = total;
}