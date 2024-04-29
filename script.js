// Variable to store the interval
let intervalId;

// Variable to store the counter value
let clickCount = 0;

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
        clearInterval(intervalId);
    }
}

// To update the countdown timer
function updateCountdown({ time }) {
    const countdownElement = document.getElementById('countdown');
    const season = document.getElementById('season');
    const paragraph = document.getElementById('time');
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

function handleFishClick() {
    clickCount++;
    updateCounterUI();
}

function updateCounterUI() {
    const counterElement = document.getElementById('counter');
    counterElement.innerText = `${clickCount}`;
    console.log('fish');
}

function peixos() {
    var fotos = 36;
    var tempsFoto = 80;
    var w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var h =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    function peixSalta(peix, reflex, i) {
        setTimeout(function () {
            angle = Math.PI - (Math.PI / (fotos / 2)) * i;
            var x = Math.sin(angle) * 250 + 400;
            var y = 290 - Math.cos(angle) * 250;
            peix.setAttribute('x', x);
            peix.setAttribute('y', y);
            peix.setAttribute(
                'transform',
                'rotate(' + angle * 57.2957795 + ' ' + x + ' ' + y + ')'
            );
            angle = Math.PI * 2 + (Math.PI / (fotos / 2)) * i;
            var x = 400 + Math.sin(angle) * 250;
            var y = 290 - Math.cos(angle) * 250;
            reflex.setAttribute('x', x);
            reflex.setAttribute('y', y);
            reflex.setAttribute(
                'transform',
                'rotate(' + angle * 57.2957795 + ' ' + x + ' ' + y + ')'
            );
        }, i * tempsFoto);
    }
    function crearPeix(peix, reflex, xaf) {
        for (i = 0; i < fotos; i++) {
            peixSalta(peix, reflex, i);
        }
        function camviaPropietats(a, i) {
            setTimeout(function () {
                a.style.display = 'block';
            }, 9 * tempsFoto + i * 2);
            setTimeout(function () {
                a.style.opacity = 0;
            }, 9 * tempsFoto + 50 + i * 2);
            setTimeout(function () {
                a.style.display = 'none';
                a.setAttribute('cx', a.getAttribute('cx') - 250 * 2);
                a.style.opacity = 1;
            }, 9 * tempsFoto + 50 + i * 2 + 200);
            setTimeout(function () {
                a.style.display = 'block';
            }, 27 * tempsFoto + i * 2);
            setTimeout(function () {
                a.style.opacity = 0;
            }, 27 * tempsFoto + 50 + i * 2);
        }
        for (i = 0; i < 50; i++) {
            var a = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'circle'
            );
            var x = Math.floor(Math.random() * 100);
            var y = Math.floor(Math.random() * 100);
            tmp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            var w = Math.floor(Math.random() * 5) + 5;
            w = 9 - (tmp * 8) / 100;
            sgn = Math.random() > 0.5 ? 1 : -1;
            a.setAttribute('cx', 650 + x * sgn);
            a.setAttribute('cy', 300 - y);
            a.setAttribute('r', w);
            a.setAttribute('fill', 'white');
            a.style.opacity = Math.random();
            xaf.appendChild(a);
            camviaPropietats(a, i);
        }
        function camviaPropietatsElipse(a, i) {
            setTimeout(function () {
                a.style.display = 'block';
            }, 9 * tempsFoto + i * 70);
            setTimeout(function () {
                a.style.opacity = 0;
            }, 9 * tempsFoto + 50 + i * 100);
            setTimeout(function () {
                a.style.display = 'none';
                a.setAttribute('cx', a.getAttribute('cx') - 250 * 2);
                a.style.opacity = 1;
            }, 27 * tempsFoto + 100);
            setTimeout(function () {
                a.style.display = 'block';
            }, 27 * tempsFoto + i * 100 + 100);
            setTimeout(function () {
                a.style.opacity = 0;
            }, 27 * tempsFoto + 50 + i * 150 + 100);
        }
        for (i = 0; i < 10; i++) {
            a = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'ellipse'
            );
            a.setAttribute('cx', 650);
            a.setAttribute('cy', 290);
            a.setAttribute('rx', 40 + i * 10);
            a.setAttribute('ry', 10 + (i * 10 * 10) / 40);
            a.setAttribute('stroke-width', 1 + (10 - i) / 10);
            xaf.appendChild(a);
            camviaPropietatsElipse(a, i);
        }
    }
    function accioPeix() {
        var y = Math.floor(Math.random() * (h - 200));
        var x = Math.floor(Math.random() * w);
        var m = (y * 700) / h + 200;
        var nouPeix = document.createElement('DIV');
        nouPeix.className = 'suportPeix';
        nouPeix.style.top = y + 'px';
        nouPeix.style.left = x + m > w ? w - m + 'px' : x + 'px';
        if (Math.random() > 0.5) nouPeix.style.transform = 'scale(-1,1)';
        nouPeix.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="' +
            m +
            '" height="' +
            m +
            '" viewBox="0 0 800 800"><g class="test" mask="url(#mask)" ><use peix xlink:href="#peix" x="400" y="700"  /></g><g mask="url(#maskReflex)" ><use reflex xlink:href="#reflex" x="400" y="140" /></g><g xaf ></g></svg>';
        document.body.insertBefore(nouPeix, document.querySelector('#sortida'));
        var grad = 'url(#grad' + Math.floor(Math.random() * 5) + ')';
        if (Math.random() > 0.94) grad = 'url(#vermell)';
        var peix = nouPeix.querySelector('use[peix]');
        peix.setAttribute('fill', grad);
        var reflex = nouPeix.querySelector('use[reflex]');
        reflex.setAttribute('fill', grad);
        var xaf = nouPeix.querySelector('g[xaf]');
        crearPeix(peix, reflex, xaf);
        setTimeout(function () {
            document.body.removeChild(nouPeix);
        }, 3000);
        // Add event listener to each jumping fish element
        const jumpingFishElement = document.querySelectorAll('.test');
        jumpingFishElement.forEach((fishElement) => {
            fishElement.addEventListener('click', handleFishClick);
        });
    }
    function temporitzadorPeix() {
        for (var i = 0; i < Math.floor(Math.random() * 4); i++) {
            setTimeout(accioPeix, i * 500);
        }
        setTimeout(function () {
            temporitzadorPeix();
        }, 1000 + Math.random() * 3000);
    }
    temporitzadorPeix();

}
window.addEventListener('DOMContentLoaded', function () {
    // Call the countdown function every second
    intervalId = setInterval(countdown, 1000);
    peixos();
    updateCounterUI();
});
timeoutResize = setTimeout(';', 1);
window.onresize = function () {
    clearTimeout(timeoutResize);

    timeoutResize = setTimeout(function () {
        location.reload();
    }, 250);
};
