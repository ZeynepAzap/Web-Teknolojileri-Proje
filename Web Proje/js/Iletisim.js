document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateFormJS()) {
        alert('Form başarıyla gönderildi!');
        this.submit();
    } else {
        alert('Lütfen formu doğru doldurunuz.');
    }
});

function validateFormJS() {
    let formIsValid = true;

    // Clear all previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const gender = document.getElementById('gender').value;
    const contactPreference = document.querySelector('input[name="contactPreference"]:checked');

    // Name validation
    if (!name) {
        document.getElementById('errorName').textContent = 'Ad Soyad gereklidir.';
        formIsValid = false;
    }

    // Email validation
    if (!email) {
        document.getElementById('errorEmail').textContent = 'Email gereklidir.';
        formIsValid = false;
    } else if (!validEmail(email)) {
        document.getElementById('errorEmail').textContent = 'Geçerli bir email adresi giriniz.';
        formIsValid = false;
    }

    // Phone validation
    if (!phone) {
        document.getElementById('errorPhone').textContent = 'Telefon gereklidir.';
        formIsValid = false;
    }

    // Message validation
    if (!message) {
        document.getElementById('errorMessage').textContent = 'Mesaj gereklidir.';
        formIsValid = false;
    }

    // Gender validation
    if (!gender) {
        document.getElementById('errorGender').textContent = 'Cinsiyet seçimi gereklidir.';
        formIsValid = false;
    }

    // Contact preference validation
    if (!contactPreference) {
        document.getElementById('errorContactPreference').textContent = 'İletişim tercihi gereklidir.';
        formIsValid = false;
    }

    if(Object.keys(this.errors).length===0){
        alert("Javascript ile form doğrulandı.")
    }

    return formIsValid;
}

function validEmail(email) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
