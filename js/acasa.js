document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    // 1. Închide meniul când apeși pe un link
    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            if(navbarCollapse.classList.contains("show"))
                new bootstrap.Collapse(navbarCollapse).toggle();
        });
    });

    // 2. Închide meniul când apeși oriunde în afara navbar-ului
    document.addEventListener("click", function(event) {

        const isClickInside = navbarCollapse.contains(event.target) || event.target.closest('.navbar-toggler');

        if(!isClickInside && navbarCollapse.classList.contains("show"))
            new bootstrap.Collapse(navbarCollapse).toggle();
    });
});
