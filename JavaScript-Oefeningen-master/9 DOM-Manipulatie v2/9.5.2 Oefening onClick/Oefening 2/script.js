let count = 0;

function countUp() {
    count++;
    updateCounter()
}

function countDown() {
    count--;
    updateCounter()
}

function resetCount() {
    count = 0;
    updateCounter()
}

function updateCounter() {
    let countDiv = document.getElementById('counter');
    countDiv.innerHTML = count;
}