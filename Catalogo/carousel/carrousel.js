/*

3D Carousel images gallery. inspired from David DeSandro's tutorial (https://3dtransforms.desandro.com/)

*/

window.addEventListener('load', function() {
    carouselRUN();
}, false);

function carouselRUN() {
    var carousel = document.getElementById("carousel");
    var scene = document.getElementById("scene");
    var carousel_items_Arrey = document.getElementsByClassName("carousel_item");
    var carousel_btn = document.getElementById("carousel_btn");
    var n = carousel_items_Arrey.length;
    var curr_carousel_items_Arrey = 0;
    var theta = Math.PI * 2 / n;
    var interval = null;
    var autoCarousel = carousel.dataset.auto;

    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    window.addEventListener('resize', function() {
        clearInterval(interval);
        setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    }, false);
    setupNavigation();


    function setupCarousel(n, width) {
        var apothem = width / (2 * Math.tan(Math.PI / n));
        scene.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (i = 1; i < n; i++) {
            carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
        }

        if (autoCarousel === "true") {
            setCarouselInterval();
        }
    }

    function setCarouselInterval() {
        interval = setInterval(function() {
            curr_carousel_items_Arrey++;
            scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
        }, 3000);
    }

    function setupNavigation() {
        carousel_btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var target = e.target;

            if (target.classList.contains('next')) {
                curr_carousel_items_Arrey++;
            } else if (target.classList.contains('prev')) {
                curr_carousel_items_Arrey--;
            }
            clearInterval(interval);
            scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

            if (autoCarousel === "true") {
                setTimeout(setCarouselInterval(), 3000);
            }
        }, true);
    }
}