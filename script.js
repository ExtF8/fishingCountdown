// Variable to store the interval
let intervalId;

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

    const time = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        difference: difference,
    };

    // Update the countdown timer
    updateCountdown({ time });

    if (difference <= 0) {
        clearInterval(intervalId)
    }
}

// To update the countdown timer
function updateCountdown({ time }) {
    const countdownElement = document.getElementById('countdown');
    const season = document.getElementById('season');
    const paragraph = document.createElement('p');
    const message = `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
    const messageForSeason = '🎆 Sezona atklāta! 🎆';
    const messageForCountdown = 'Tight lines and bent rods, baby!';

    // Remove existing elements
    countdownElement.innerHTML = '';

    if (time.difference <= 0) {
        season.innerText = messageForSeason;
        paragraph.innerText = messageForCountdown;
    } else {
        paragraph.innerText = message;
    }
    countdownElement.append(paragraph);
}

// Call the countdown function every second
intervalId = setInterval(countdown, 1000);
