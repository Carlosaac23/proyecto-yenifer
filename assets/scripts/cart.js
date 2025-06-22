// Carrito sencillo global
let cart = [];

// Recuperar carrito de localStorage si existe
if (localStorage.getItem('cart')) {
  try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    cart = [];
  }
}

// Crear y agregar el panel flotante del carrito al body
const cartPanel = document.createElement('div');
cartPanel.id = 'cartPanel';
cartPanel.style.position = 'fixed';
cartPanel.style.top = '';
cartPanel.style.bottom = '24px';
cartPanel.style.right = '24px';
cartPanel.style.width = '320px';
cartPanel.style.background = '#fff';
cartPanel.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
cartPanel.style.borderRadius = '10px';
cartPanel.style.padding = '16px';
cartPanel.style.zIndex = '1000';
cartPanel.style.display = 'none';
cartPanel.innerHTML = '<h3>Carrito</h3><div id="cartItems"></div><button id="closeCart">Cerrar</button>';
document.body.appendChild(cartPanel);

function showCart() {
  const cartItems = document.getElementById('cartItems');
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>El carrito está vacío.</p>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item, idx) => `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <img src="${item.img}" alt="${item.name}" style="width:40px;height:40px;object-fit:cover;border-radius:5px;" />
        <div style="flex:1;">
          <div><strong>${item.name}</strong></div>
          <div>${item.price}</div>
        </div>
        <button class="remove-cart-item" data-idx="${idx}" style="background:transparent;border:none;color:#d00;font-size:1.2rem;cursor:pointer;">&times;</button>
      </div>
    `
      )
      .join('');
    // Asignar eventos a los botones de eliminar
    cartItems.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.onclick = function () {
        const idx = parseInt(this.getAttribute('data-idx'));
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
      };
    });
  }
  cartPanel.style.display = 'block';
}

document.getElementById('closeCart').onclick = () => {
  cartPanel.style.display = 'none';
};

// Botón flotante para abrir el carrito
const openCartBtn = document.createElement('button');
openCartBtn.textContent = '🛒 Ver carrito';
openCartBtn.style.position = 'fixed';
openCartBtn.style.top = '';
openCartBtn.style.bottom = '24px';
openCartBtn.style.right = '370px';
openCartBtn.style.zIndex = '1001';
openCartBtn.style.background = '#222';
openCartBtn.style.color = '#fff';
openCartBtn.style.border = 'none';
openCartBtn.style.borderRadius = '50px';
openCartBtn.style.padding = '12px 20px';
openCartBtn.style.cursor = 'pointer';
document.body.appendChild(openCartBtn);
openCartBtn.onclick = showCart;

// Función global para agregar productos al carrito desde cualquier archivo
window.addToCart = function (product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  showCart();
};
