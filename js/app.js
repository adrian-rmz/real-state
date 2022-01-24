// Sticky Nav Bar
window.addEventListener('scroll', function() {
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 1000);
});

// Increase Stats Number
const counters = document.querySelectorAll('.hero-counter'); // Get all counters
const speed = 100; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target'); // Get the target number
        const count = +counter.innerText; // Get the current count

        const inc = target / speed; // Calculate increment (Lower inc to slow and higher to slow)
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc); // Increment the count
            setTimeout(() => updateCount(), 15); // Recursive call
        } else {
            counter.innerText = target; // Set the target number
        }
    }

    updateCount(); // Start the counter
});


// Init Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    responsive:{
        0:{
            items: 1
        },
        680:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});
