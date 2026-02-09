const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', function() {
        const paragraph = document.querySelector('p');
        if (paragraph) {
            paragraph.textContent = 'Je hebt op de knop geklikt!';
        } else {
            console.error('Het paragraph-element bestaat niet.');
        }
    });
} else {
    console.error('Het button-element bestaat niet.');
}