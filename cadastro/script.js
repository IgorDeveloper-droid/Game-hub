const signupForm = document.querySelector('#signupForm');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const usernameError = document.querySelector('#usernameError');
const passwordError = document.querySelector('#passwordError');
const confirmPasswordError = document.querySelector('#confirmPasswordError');
const formMessage = document.querySelector('#formMessage');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    usernameError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    formMessage.textContent = '';
    formMessage.classList.remove('success');

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    let valid = true;

    if (username.length < 3) {
        usernameError.textContent = 'Use pelo menos 3 caracteres.';
        valid = false;
    }
    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'As senhas precisam ser iguais.';
        valid = false;
    }
    if (!valid) return;

    localStorage.setItem('gameHubUser', JSON.stringify({ username, password }));
    formMessage.textContent = 'Conta criada! Indo para o login...';
    formMessage.classList.add('success');
    window.setTimeout(() => {
        window.location.href = '../login/index.html';
    }, 700);
});
