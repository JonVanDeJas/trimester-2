const button = document.querySelector('button');

// Null check voor button.
if (button !== null) {
    button.addEventListener('click', function() {
        const paragraph = document.querySelector('p');

        // Null check voor paragraph.
        if (paragraph !== null) {
            paragraph.textContent = 'Je hebt op de knop geklikt!';
        } else {
            console.error('<p> element not found.');

        }
    });
} else {
    console.error('<button> element not found.');
}