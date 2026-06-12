const products = [
  { id: 1, name: "Wireless Headphones", price: 1999 },
  { id: 2, name: "Smart Watch", price: 2999 },
  { id: 3, name: "Gaming Mouse", price: 1499 },
  { id: 4, name: "Bluetooth Speaker", price: 2499 },
  { id: 5, name: "Mechanical Keyboard", price: 3499 }
];

const productContainer = document.getElementById("product-container");

function renderProducts(data) {
  if (!productContainer) return;

  productContainer.innerHTML = "";

  data.forEach(product => {
    productContainer.innerHTML += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
    `;
  });
}

renderProducts(products);