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
  {
    name: 'Decoración de Oficina 1',
    desc: 'Transforma tu espacio de trabajo con estilo y funcionalidad',
    price: '$250.000',
    img: 'assets/images/decoracion1.jpeg',
  },
  {
    name: 'Decoración de Oficina 2',
    desc: 'Ambientes modernos y personalizados para tu empresa',
    price: '$300.000',
    img: 'assets/images/decoracion2.jpeg',
  },
  {
    name: 'Decoración de Oficina 3',
    desc: 'Diseño y confort para potenciar la productividad',
    price: '$280.000',
    img: 'assets/images/decoracion3.jpeg',
  },
  {
    name: 'Decoración de Oficina 4',
    desc: 'Soluciones creativas para espacios reducidos',
    price: '$220.000',
    img: 'assets/images/decoracion4.jpeg',
  },
  {
    name: 'Decoración de Oficina 5',
    desc: 'Estética y funcionalidad en cada rincón',
    price: '$260.000',
    img: 'assets/images/decoracion5.jpeg',
  },
  {
    name: 'Decoración de Oficina 6',
    desc: 'Ambientes inspiradores para equipos creativos',
    price: '$310.000',
    img: 'assets/images/decoracion6.jpeg',
  },
  {
    name: 'Decoración de Oficina 7',
    desc: 'Espacios que motivan y mejoran el bienestar',
    price: '$270.000',
    img: 'assets/images/decoracion7.jpeg',
  },
  {
    name: 'Decoración de Oficina 8',
    desc: 'Diseño minimalista y elegante',
    price: '$240.000',
    img: 'assets/images/decoracion8.jpeg',
  },
  {
    name: 'Decoración de Oficina 9',
    desc: 'Personalización total para tu oficina',
    price: '$350.000',
    img: 'assets/images/decoracion9.jpeg',
  },
  {
    name: 'Mantenimiento Preventivo PC',
    desc: 'Limpieza y optimización de hardware para mayor durabilidad',
    price: '$120.000',
    img: 'assets/images/mantenimiento1.jpeg',
  },
  {
    name: 'Mantenimiento Preventivo Laptop',
    desc: 'Evita fallas y mejora el rendimiento de tu laptop',
    price: '$140.000',
    img: 'assets/images/mantenimiento2.jpeg',
  },
  {
    name: 'Reparación de PC',
    desc: 'Diagnóstico y solución de problemas de hardware',
    price: '$180.000',
    img: 'assets/images/reparacion1.jpeg',
  },
  {
    name: 'Reparación de Laptop',
    desc: 'Servicio técnico especializado para laptops',
    price: '$200.000',
    img: 'assets/images/reparacion2.jpeg',
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
    card.querySelector('.product-card__btn').addEventListener('click', () => {
      window.addToCart(product);
    });
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
