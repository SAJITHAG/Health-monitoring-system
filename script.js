// Simulating health parameter data
function updateHealthData() {
    const heartRate = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
    const temperature = (Math.random() * (37 - 36) + 36).toFixed(1);

    document.getElementById('heartRate').innerText = heartRate;
    document.getElementById('temperature').innerText = temperature;
}

// Update data every 2 seconds
setInterval(updateHealthData, 2000);