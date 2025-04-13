document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (would need HTML element added)
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav .container').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });
    
    // Product card hover effect enhancement
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
    
    // Simple cart counter
    const addToCartBtns = document.querySelectorAll('.btn-small');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            count++;
            cartCount.textContent = count;
            
            // Animation
            cartCount.classList.add('animate');
            setTimeout(() => {
                cartCount.classList.remove('animate');
            }, 300);
        });
    });
    
    // Banner countdown timer (example)
    const bannerTimer = document.createElement('div');
    bannerTimer.className = 'banner-timer';
    bannerTimer.innerHTML = 'До конца акции: <span class="timer">24:59:59</span>';
    document.querySelector('.banner .banner-content').appendChild(bannerTimer);
    
    // Simulate timer
    let time = 24 * 60 * 60; // 24 hours in seconds
    
    setInterval(() => {
        time--;
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        document.querySelector('.timer').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
});