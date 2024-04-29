// Function to calculate remaining time until May 1st
function countdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 4, 1);

    // Calculate the difference in milliseconds
    const difference = targetDate.getTime() - now.getTime();

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown timer
    updateCountdown(days, hours, minutes, seconds);
}

// To update the countdown timer
function updateCountdown(days, hours, minutes, seconds) {
    const countdownElement = document.getElementById('countdown');

    // Remove existing elements
    countdownElement.innerHTML = '';

    const paragraph = document.createElement('p');
    const message = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    paragraph.innerText = message;
    countdownElement.append(paragraph);
}

// Call the countdown function every second
setInterval(countdown, 1000);
