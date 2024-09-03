function scrollToVideo() {
    document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' });
}

const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const indicators = document.querySelectorAll('.indicator');
    let index = 0;

    function initializeSlider(sliderId) {
        const slider = document.getElementById(sliderId);
        const slides = slider.querySelector('.slides');
        const images = slider.querySelectorAll('.slides img');
        let index = 0;
    
        function showSlide(n) {
            index = (n + images.length) % images.length;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }
    
        slider.querySelector('.prev').addEventListener('click', () => {
            showSlide(index - 1);
        });
    
        slider.querySelector('.next').addEventListener('click', () => {
            showSlide(index + 1);
        });
    
        showSlide(index); // Initialize the first slide
    }
    
    // Initialize both sliders
    initializeSlider('character_posters');
    initializeSlider('images');

    //Nav bar responsive
    // Next/previous controls
    let slideIndex = 1;
    showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
