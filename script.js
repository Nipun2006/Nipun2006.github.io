document.addEventListener("DOMContentLoaded", () => {
    
    function updateClock() {
        const now = new Date();
        
        // Formats time to HH:MM:SS
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        document.getElementById('live-clock').textContent = timeString;
    }

    // Update the clock immediately, then every 1000ms (1 second)
    updateClock();
    setInterval(updateClock, 1000);
    
});