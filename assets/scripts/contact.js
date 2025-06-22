const formType = document.getElementById('formType');
const contactForm = document.getElementById('contactForm');
const serviceForm = document.getElementById('serviceForm');
const deviceGroup = document.getElementById('deviceGroup');
const problemGroup = document.getElementById('problemGroup');
const adviceGroup = document.getElementById('adviceGroup');
const decorationGroup = document.getElementById('decorationGroup');
const buySellGroup = document.getElementById('buySellGroup');

formType.addEventListener('change', function () {
  // Ocultar todos los grupos
  deviceGroup.style.display = 'none';
  problemGroup.style.display = 'none';
  adviceGroup.style.display = 'none';
  decorationGroup.style.display = 'none';
  buySellGroup.style.display = 'none';

  if (this.value === 'contact') {
    contactForm.style.display = '';
    serviceForm.style.display = 'none';
  } else {
    contactForm.style.display = 'none';
    serviceForm.style.display = '';
    // Mostrar campos según el servicio
    if (['mantenimiento-hw-prev', 'mantenimiento-hw-corr', 'mantenimiento-sw-prev', 'mantenimiento-sw-corr'].includes(this.value)) {
      deviceGroup.style.display = '';
      problemGroup.style.display = '';
    } else if (this.value === 'asesoria') {
      adviceGroup.style.display = '';
    } else if (this.value === 'decoracion-manual' || this.value === 'decoracion-evento') {
      decorationGroup.style.display = '';
    } else if (this.value === 'venta' || this.value === 'compra') {
      buySellGroup.style.display = '';
    }
  }
});
