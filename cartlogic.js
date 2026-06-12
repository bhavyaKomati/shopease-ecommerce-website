let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount(){
    const cartCount = document.getElementById("cart-count");

    if(cartCount){
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId){
    const product = products.find(item => item.id === productId);

    const existingItem = cart.find(item => item.id === productId);

    if(existingItem){
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
}

updateCartCount();
window.addToCart = addToCart;
function renderCart(){
    const cartItems = document.getElementById("cart-items");
    const cartSummary = document.getElementById("cart-summary");

    if(!cartItems || !cartSummary) return;

    cartItems.innerHTML = "";

    if(cart.length === 0){
        cartItems.innerHTML = `<p>Your cart is empty. <a href="products.html">Continue Shopping</a></p>`;
        cartSummary.innerHTML = "";
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `
    <div class="cart-item">
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>

        <button onclick="decreaseQuantity(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity(${item.id})">+</button>

        <button onclick="removeItem(${item.id})">Delete</button>
    </div>
    `;
    });

    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    cartSummary.innerHTML = `
        <h2>Order Summary</h2>
        <p>Subtotal: ₹${subtotal}</p>
        <p>Tax (10%): ₹${tax.toFixed(2)}</p>
        <h3>Total: ₹${total.toFixed(2)}</h3>
        <a href="checkout.html" class="btn">Proceed to Checkout</a>
    `;
}

renderCart();
function increaseQuantity(id){
    const item = cart.find(product => product.id === id);
    item.quantity += 1;
    saveCart();
    renderCart();
}

function decreaseQuantity(id){
    const item = cart.find(product => product.id === id);

    if(item.quantity > 1){
        item.quantity -= 1;
    } else {
        cart = cart.filter(product => product.id !== id);
    }

    saveCart();
    renderCart();
}

function removeItem(id){
    cart = cart.filter(product => product.id !== id);
    saveCart();
    renderCart();
}