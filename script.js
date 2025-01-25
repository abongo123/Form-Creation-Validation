alert('Deep Dive Javascript')

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
        const username = getElementById('username').value.trim();
        const email = getElementById('email').value.trim();
        const password = getElementById('password').trim();

        let isValid = true;
        let messages = [];
    if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
          }
    if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address with "@" and ".".');
          }
    if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
          }
    const feedbackDiv = document.getElementById('feedbackDiv');
          feedbackDiv.style.display = 'block';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
          } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
          }
        });
    }
});
