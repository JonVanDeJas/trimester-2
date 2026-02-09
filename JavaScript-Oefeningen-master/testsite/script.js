// Helperfunctie om te checken of een getal een priemgetal is
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Genereer de getallen 1 t/m 50 in vakjes
const numberGrid = document.getElementById('numberGrid');
for (let i = 1; i <= 50; i++) {
    const numberBox = document.createElement('div');
    numberBox.textContent = i;
    numberBox.setAttribute('data-number', i);
    numberGrid.appendChild(numberBox);
}

// Event listener voor de checkbox en het invoerveld
const primeCheckbox = document.getElementById('primeNumbersCheckbox');
const numberInput = document.getElementById('numberInput');

function updateHighlights() {
    const highlightAbove = parseInt(numberInput.value) || 0;
    const isPrimeChecked = primeCheckbox.checked;
    const boxes = numberGrid.querySelectorAll('div');

    boxes.forEach(box => {
        const number = parseInt(box.getAttribute('data-number'));
        box.classList.remove('prime', 'highlight'); // Reset de kleuren

        // Check voor priemgetallen
        if (isPrimeChecked && isPrime(number) && number > highlightAbove) {
            box.classList.add('prime');
        }

        // Check voor getallen groter dan het ingegeven getal
        if (!isPrimeChecked && number > highlightAbove) {
            box.classList.add('highlight');
        }

        // Combineer beide filters (priemgetallen groter dan het ingegeven getal)
        if (isPrimeChecked && number > highlightAbove && isPrime(number)) {
            box.classList.add('prime');
        }
    });
}

// Koppel event listeners aan checkbox en invoerveld
primeCheckbox.addEventListener('change', updateHighlights);
numberInput.addEventListener('input', updateHighlights);
