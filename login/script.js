const loginForm = document.querySelector('#loginForm');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const usernameError = document.querySelector('#usernameError');
const passwordError = document.querySelector('#passwordError');
const formMessage = document.querySelector('#formMessage');
const togglePassword = document.querySelector('#togglePassword');
const forgotPassword = document.querySelector('#forgotPassword');

function clearMessages() {
    usernameError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';
    formMessage.classList.remove('success');
}

function showMessage(message, type = '') {
    formMessage.textContent = message;
    formMessage.classList.toggle('success', type === 'success');
}

togglePassword.addEventListener('click', () => {
    const showingPassword = passwordInput.type === 'text';
    passwordInput.type = showingPassword ? 'password' : 'text';
    togglePassword.textContent = showingPassword ? 'Mostrar' : 'Ocultar';
    togglePassword.setAttribute('aria-label', showingPassword ? 'Mostrar senha' : 'Ocultar senha');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    clearMessages();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    let valid = true;

    if (!username) {
        usernameError.textContent = 'Informe seu usuário ou e-mail.';
        valid = false;
    }

    if (!password) {
        passwordError.textContent = 'Informe sua senha.';
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false;
    }

    if (!valid) {
        return;
    }

    const savedUser = JSON.parse(localStorage.getItem('gameHubUser'));

    if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
        showMessage('Usuário ou senha incorretos.');
        return;
    }

    localStorage.setItem('gameHubSession', JSON.stringify({ username: savedUser.username }));
    showMessage('Login realizado! Redirecionando...', 'success');
    window.setTimeout(() => {
        window.location.href = '../dashboard.html';
    }, 500);
});

forgotPassword.addEventListener('click', (event) => {
    event.preventDefault();
    showMessage('Recuperação de senha ainda será configurada.', 'success');
});
