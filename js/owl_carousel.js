// Get the current screen width
$(document).ready(function(){
    // Initialize the first carousel
    $('.carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200:{
                items:4
            }
        }
    });

    // Initialize the second carousel
    $('.carousel2').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // Initialize the third carousel
    $('.carousel3').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            },
            1200:{
                items: 5
            }
        },
        // Other options as needed
        onInitialized: setEqualHeights,
        onResized: setEqualHeights // Adjust on window resize
    });

    // Initialize the fourth carousel
    $('.carousel4').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
        }
    });

    function setEqualHeights() {
        const cardBodies = $('#contribution .card-body');
        let maxHeight = 0;

        // Reset heights
        cardBodies.css('height', 'auto');

        // Calculate the maximum height
        cardBodies.each(function() {
            const cardHeight = $(this).outerHeight();
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });

        // Set all card bodies to the maximum height
        cardBodies.height(maxHeight);
    }
});
