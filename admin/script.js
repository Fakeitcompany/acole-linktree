const users = [
    { username: 'admin', password: 'City8map', access: ['*'] }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    const messageDiv = document.getElementById('message');
    if (user) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';

        } else {
            // For other users, redirect to a generic private page
            window.location.href = 'private.html';
        }
    } else {
        messageDiv.textContent = 'Invalid username or password!';
        messageDiv.style.color = 'red';
    }
});
