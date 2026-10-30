// COSMOX Space Dashboard

document.addEventListener("DOMContentLoaded", function () {

    console.log("COSMOX JavaScript Connected Successfully!");

    // Planet / Space cards
    const cards = document.querySelectorAll(".space-card");

    cards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.add("active");

            setTimeout(function () {
                card.classList.remove("active");
            }, 500);
        });
    });

});