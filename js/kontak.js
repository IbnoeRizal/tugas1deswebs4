document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([-8.09846617199961, 112.1838791254894], 10);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);
        // Add marker
        L.marker([-8.09846617199961, 112.1838791254894]).addTo(map).bindPopup('Kantor BerkahSeken<br>Jl. Seken Raya No. 15, Jakarta').openPopup();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const sendButton = document.querySelector('.btn-send');

        function showError(input, message) {
          const errorDiv = input.parentElement.querySelector('.error-message');
          errorDiv.textContent = message;
          errorDiv.style.display = 'block';
          input.classList.add('is-invalid');
        }

        function clearError(input) {
          const errorDiv = input.parentElement.querySelector('.error-message');
          errorDiv.textContent = '';
          errorDiv.style.display = 'none';
          input.classList.remove('is-invalid');
        }

        function validateName() {
          if (nameInput.value.trim() === '') {
            showError(nameInput, 'Nama lengkap tidak boleh kosong');
            return false;
          } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, 'Nama lengkap minimal 3 karakter');
            return false;
          } else {
            clearError(nameInput);
            return true;
          }
        }

        function validateEmail() {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email tidak boleh kosong');
            return false;
          } else if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Format email tidak valid');
            return false;
          } else {
            clearError(emailInput);
            return true;
          }
        }

        function validateSubject() {
          if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Subjek tidak boleh kosong');
            return false;
          } else if (subjectInput.value.trim().length < 5) {
            showError(subjectInput, 'Subjek minimal 5 karakter');
            return false;
          } else {
            clearError(subjectInput);
            return true;
          }
        }

        function validateMessage() {
          if (messageInput.value.trim() === '') {
            showError(messageInput, 'Pesan tidak boleh kosong');
            return false;
          } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Pesan minimal 10 karakter');
            return false;
          } else {
            clearError(messageInput);
            return true;
          }
        }

        // Event listeners
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        subjectInput.addEventListener('input', validateSubject);
        messageInput.addEventListener('input', validateMessage);

        sendButton.addEventListener('click', function (e) {
          e.preventDefault();

          const isNameValid = validateName();
          const isEmailValid = validateEmail();
          const isSubjectValid = validateSubject();
          const isMessageValid = validateMessage();

          if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            alert('Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.');
            document.querySelector('.contact-form').reset();
          }
        });


        
      });