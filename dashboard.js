const session = JSON.parse(localStorage.getItem('gameHubSession'));
const username = document.querySelector('#username');
const logoutButton = document.querySelector('#logoutButton');

if (!session) {
    window.location.href = 'login/index.html';
} else {
    username.textContent = session.username;
}

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('gameHubSession');
    window.location.href = 'login/index.html';
});
