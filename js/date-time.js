function updateDateTime() {
    const now = new Date();
    const hours = now.getHours();

    let greeting = '';
    if (hours < 12) {
        greeting = 'Bom dia';
    } else if (hours < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    const dateTimeString = `${greeting} - ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    document.getElementById('datetime').textContent = dateTimeString;
}

// Atualiza imediatamente ao carregar
updateDateTime();

// Atualiza a cada segundo
setInterval(updateDateTime, 1000);