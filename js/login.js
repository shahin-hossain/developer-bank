//login button 
document.getElementById('btn-login').addEventListener('click', function () {
    const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;
    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;

    if (email === 'shahin@developer.com' && password === 'password') {
        window.location.href = 'bank.html';
    }
})