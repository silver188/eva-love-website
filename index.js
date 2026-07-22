let loveCounter = 1;

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    
    const randomX = Math.random() * window.innerWidth;
    heart.style.left = randomX + 'px';
    heart.style.top = '100vh';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate hearts periodically
setInterval(createFloatingHeart, 500);

// Show love message when button is clicked
function showLoveMessage() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.classList.add('show');
    
    // Create multiple hearts on button click
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 80);
    }
}

// Increment love counter
function incrementCounter() {
    loveCounter++;
    const counterDisplay = document.getElementById('counterDisplay');
    counterDisplay.textContent = loveCounter;
    
    // Create hearts when counter increases
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
    
    // Add animation effect
    counterDisplay.style.animation = 'none';
    setTimeout(() => {
        counterDisplay.style.animation = 'pulse 2s infinite';
    }, 10);
}

// Create initial hearts on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 300);
    }
});