document.addEventListener('DOMContentLoaded', function () {
        const fullnameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const termsCheckbox = document.getElementById('terms');
        const registerButton = document.querySelector('.btn-primary-custom');

        // Function to show error
        function showError(input, message) {
          const errorDiv = input.parentElement.querySelector('.error-message');
          errorDiv.textContent = message;
          errorDiv.style.display = 'block';
          input.classList.add('is-invalid');
        }

        // Function to clear error
        function clearError(input) {
          const errorDiv = input.parentElement.querySelector('.error-message');
          errorDiv.textContent = '';
          errorDiv.style.display = 'none';
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
        }

        // Validation functions
        function validateFullname() {
          if (fullnameInput.value.trim() === '') {
            showError(fullnameInput, 'Nama lengkap tidak boleh kosong');
            return false;
          } else if (fullnameInput.value.trim().length < 3) {
            showError(fullnameInput, 'Nama lengkap minimal 3 karakter');
            return false;
          } else {
            clearError(fullnameInput);
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

        function validatePhone() {
          const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
          if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Nomor telepon tidak boleh kosong');
            return false;
          } else if (!phoneRegex.test(phoneInput.value.trim())) {
            showError(phoneInput, 'Format nomor telepon tidak valid (gunakan format Indonesia)');
            return false;
          } else {
            clearError(phoneInput);
            return true;
          }
        }

        function validatePassword() {
          if (passwordInput.value === '') {
            showError(passwordInput, 'Password tidak boleh kosong');
            return false;
          } else if (passwordInput.value.length < 8) {
            showError(passwordInput, 'Password minimal 8 karakter');
            return false;
          } else if (!/[A-Z]/.test(passwordInput.value)) {
            showError(passwordInput, 'Password harus mengandung minimal 1 huruf kapital');
            return false;
          } else if (!/[0-9]/.test(passwordInput.value)) {
            showError(passwordInput, 'Password harus mengandung minimal 1 angka');
            return false;
          } else {
            clearError(passwordInput);
            return true;
          }
        }

        function validateConfirmPassword() {
          if (confirmPasswordInput.value === '') {
            showError(confirmPasswordInput, 'Konfirmasi password tidak boleh kosong');
            return false;
          } else if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, 'Password tidak cocok');
            return false;
          } else {
            clearError(confirmPasswordInput);
            return true;
          }
        }

        function validateTerms() {
          if (!termsCheckbox.checked) {
            termsCheckbox.classList.add('is-invalid');
            return false;
          } else {
            termsCheckbox.classList.remove('is-invalid');
            return true;
          }
        }

        // Event listeners for real-time validation
        fullnameInput.addEventListener('input', validateFullname);
        emailInput.addEventListener('input', validateEmail);
        phoneInput.addEventListener('input', validatePhone);
        passwordInput.addEventListener('input', validatePassword);
        confirmPasswordInput.addEventListener('input', validateConfirmPassword);
        termsCheckbox.addEventListener('change', validateTerms);

        // Submit button event listener
        registerButton.addEventListener('click', function (e) {
          e.preventDefault();

          const isFullnameValid = validateFullname();
          const isEmailValid = validateEmail();
          const isPhoneValid = validatePhone();
          const isPasswordValid = validatePassword();
          const isConfirmPasswordValid = validateConfirmPassword();
          const isTermsChecked = validateTerms();

          if (isFullnameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid && isTermsChecked) {
            // Show success message using Bootstrap modal or alert
            const successAlert = document.createElement('div');
            successAlert.className = 'alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3';
            successAlert.style.zIndex = '9999';
            successAlert.innerHTML = `
              <strong>Pendaftaran Berhasil!</strong> Silakan cek email Anda untuk verifikasi.
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            document.body.appendChild(successAlert);

            // Reset form
            document.querySelector('.registration-form').reset();
            document.querySelectorAll('.is-valid').forEach((el) => el.classList.remove('is-valid'));

            // Remove alert after 5 seconds
            setTimeout(() => {
              if (successAlert.parentNode) {
                successAlert.remove();
              }
            }, 5000);
          } else {
            // Scroll to first error
            const firstInvalid = document.querySelector('.is-invalid');
            if (firstInvalid) {
              firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }
        });
      });