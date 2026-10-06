const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Naam is vereist';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Geldig e-mailadres is vereist';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Geldig telefoonnummer is vereist';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Bericht is vereist';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
