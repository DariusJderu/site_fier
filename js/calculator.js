/*Navbar*/
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
/*Navbar*/


/*Calculator*/
//Preturi actualizate
const PRICES = {

    fier: 1.00,
    cupru_lucios: 2.00,
    cupru_mixt: 3.00,
    aluminiu: 4.00,
    sarma_aluminiu: 5.00,
    jante_aluminiu: 6.00,
    aluminiu_mixt: 7.00,
    baterii: 8.00,
    inox: 9.00,
    deeeuri: 10.00,
    alama: 11.00,
    radiatoare_alama: 12.00,
    radiatoare_c_a: 13.00,
    radiatoare_aluminiu: 14.00
};

// Selectăm toate <select> pentru materiale și toate inputurile de cantitate
const materialSelects = document.querySelectorAll(".material-select");
const qtyInputs = document.querySelectorAll(".qty-input");
const totalAmountEl = document.getElementById("totalAmount");

// Funcția care calculează totalul
function recalc() {

    let total = 0;

    for(let i = 0; i < materialSelects.length; ++i) {

        const material = materialSelects[i].value;
        const cantitate = parseFloat(qtyInputs[i].value);

        if(!material || isNaN(cantitate) || cantitate <= 0)
            continue;

        const price = PRICES[material];
        total += price * cantitate;
    }

    totalAmountEl.textContent = total.toFixed(2);
}

materialSelects.forEach( (select_deseu) => {

    select_deseu.addEventListener("change", recalc);
});
qtyInputs.forEach( (cantitate_deseu) => {

    cantitate_deseu.addEventListener("input", recalc);
});
/*Calculator*/

