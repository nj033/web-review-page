document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
                slide.querySelector('.review').classList.add('active');
            } else {
                slide.classList.remove('active');
                slide.querySelector('.review').classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000); // Change slides automatically every 5 seconds

    showSlide(currentIndex);
});
