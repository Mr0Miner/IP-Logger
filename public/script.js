let lastIP = null;
let logTableVisible = false;

async function fetchIPInfo() {
    const response = await fetch('https://ipinfo.io/json?token=606814b0ae95e9');
    const data = await response.json();
    return data;
}

async function logIP() {
    const data = await fetchIPInfo();
    const ip = data.ip;
    const country = data.country.toLowerCase();
    const timestamp = new Date().toLocaleString();

    document.getElementById('ip').innerHTML = `Your IP is ${ip}`;
    document.getElementById('from').innerHTML = `Your IP From <span class="flag-icon flag-icon-${country}"></span> ${country.toUpperCase()}`;

    if (ip !== lastIP) {
        await fetch('/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ip, country, timestamp })
        });

        lastIP = ip;
        addLogEntry({ ip, country, timestamp });
    }
}

function addLogEntry(logEntry) {
    const tableBody = document.getElementById('logTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const timeCell = newRow.insertCell(0);
    const ipCell = newRow.insertCell(1);
    const countryCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    timeCell.textContent = logEntry.timestamp;
    ipCell.textContent = logEntry.ip;
    countryCell.innerHTML = `<span class="flag-icon flag-icon-${logEntry.country}"></span> ${logEntry.country.toUpperCase()}`;
    actionCell.innerHTML = `<button onclick="deleteLogEntry(this)">Delete</button>`;

    newRow.dataset.timestamp = logEntry.timestamp; // Adding timestamp as a data attribute for easier reference
}

async function fetchLog() {
    const response = await fetch('/log');
    const logs = await response.json();
    logs.forEach(addLogEntry);
}

async function deleteLogEntry(button) {
    const row = button.parentNode.parentNode;
    const timestamp = row.dataset.timestamp;

    await fetch('/log', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ timestamp })
    });

    row.remove();
}

function toggleLogTable() {
    const logContainer = document.getElementById('logContainer');
    logTableVisible = !logTableVisible;
    logContainer.style.display = logTableVisible ? 'block' : 'none';
}

setInterval(logIP, 1000);
fetchLog();
logIP();
