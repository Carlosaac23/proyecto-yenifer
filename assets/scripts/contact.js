const formType = document.getElementById('formType');
const contactForm = document.getElementById('contactForm');
const serviceForm = document.getElementById('serviceForm');

formType.addEventListener('change', function () {
  if (this.value === 'contact') {
    contactForm.style.display = '';
    serviceForm.style.display = 'none';
  } else {
    contactForm.style.display = 'none';
    serviceForm.style.display = '';
  }
});
