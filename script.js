let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    // Ensure index is within the bounds
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Update the transform property to show the current slide
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the first slide
showSlide(currentIndex);

// Additional Products------------------>


document.getElementById('more_product').addEventListener('click', function() {
    var hiddenProducts = document.querySelectorAll('.product-wrap.hidden');
    var button = this;

    if (button.textContent.trim() === 'See More Products') {
        hiddenProducts.forEach(function(product) {
            product.classList.remove('hidden');
        });
        button.innerHTML = '<p>See Less Products</p><img src="images/arrow.svg" alt="">';
    } else {
        var allProducts = document.querySelectorAll('.product-wrap');
        allProducts.forEach(function(product, index) {
            if (index >= 6) {
                product.classList.add('hidden');
            }
        });
        button.innerHTML = '<p>See More Products</p><img src="images/arrow.svg" alt="">';
    }
});
