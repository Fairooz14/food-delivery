// let currentSlide = 0;

// function showSlide(index) {
//     const carousel = document.querySelector('.carousel');
//     const totalSlides = document.querySelectorAll('.carousel-item').length;
    
//     if (index >= totalSlides) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = totalSlides - 1;
//     } else {
//         currentSlide = index;
//     }
    
//     const offset = -currentSlide * 100;
//     carousel.style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// function prevSlide() {
//     showSlide(currentSlide - 1);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
// });

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
