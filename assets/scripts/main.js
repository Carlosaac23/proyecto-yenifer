const products = [
  {
    name: 'Laptop Pro 15"',
    desc: 'Potente laptop para trabajo y gaming',
    price: '$3.200.000',
    img: 'assets/images/laptop-pro.jpg',
  },
  {
    name: 'Monitor UltraWide',
    desc: 'Pantalla curva 34" para máxima productividad',
    price: '$1.500.000',
    img: 'assets/images/monitor-ultrawide.jpg',
  },
  {
    name: 'Teclado Mecánico RGB',
    desc: 'Switches silenciosos y retroiluminación',
    price: '$320.000',
    img: 'assets/images/teclado-rgb.png',
  },
  {
    name: 'Mouse Inalámbrico',
    desc: 'Precisión y ergonomía para largas jornadas',
    price: '$180.000',
    img: 'assets/images/mouse-ina.png',
  },
  {
    name: 'Auriculares Pro',
    desc: 'Sonido envolvente y micrófono HD',
    price: '$420.000',
    img: 'assets/images/auriculares.png',
  },
  {
    name: 'Silla Gamer',
    desc: 'Comodidad y soporte lumbar premium',
    price: '$1.100.000',
    img: 'assets/images/silla-gamer.png',
  },
  {
    name: 'Disco SSD 1TB',
    desc: 'Almacenamiento ultrarrápido para tu PC',
    price: '$390.000',
    img: 'assets/images/disco-ssd.png',
  },
  {
    name: 'Webcam Full HD',
    desc: 'Videollamadas nítidas y fluidas',
    price: '$210.000',
    img: 'assets/images/webcam.png',
  },
];

const slider = document.getElementById('productsSlider');
let currentIndex = 0;
const visibleCards = 4;

function renderProducts() {
  slider.innerHTML = '';
  products.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-card__img" />
            <div class="product-card__name">${product.name}</div>
            <div class="product-card__desc">${product.desc}</div>
            <div class="product-card__price">${product.price}</div>
            <button class="product-card__btn">Agregar al carrito</button>
          `;
    slider.appendChild(card);
  });
  updateSlider();
}

function updateSlider() {
  const cardWidth = slider.querySelector('.product-card').offsetWidth + 32; // 32px gap
  slider.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
}

document.getElementById('sliderPrev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
document.getElementById('sliderNext').addEventListener('click', () => {
  if (currentIndex < products.length - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);
renderProducts();
