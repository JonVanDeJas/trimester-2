let allMenuItems = document.querySelectorAll('ul');

allMenuItems.forEach(ul => {
    ul.parentElement.removeChild(ul);
});