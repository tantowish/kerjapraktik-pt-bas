document.getElementById('burger-icon').addEventListener('click', function() {
    const responsiveMenu = document.getElementById('responsive-menu');
    
    if (responsiveMenu.classList.contains('menu-slide-in')) {
        responsiveMenu.classList.remove('menu-slide-in');
        responsiveMenu.classList.add('menu-slide-out');
        setTimeout(function() {
            responsiveMenu.classList.toggle('hidden');
        }, 500);
    } else {
        responsiveMenu.classList.remove('menu-slide-out');
        responsiveMenu.classList.add('menu-slide-in');
        responsiveMenu.classList.toggle('hidden');
    }
});
