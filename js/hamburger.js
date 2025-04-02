document.querySelector('.hamburger').addEventListener('click', function() {
    console.log('Hamburger clicked');
    document.querySelector('.nav-links').classList.toggle('show');
});