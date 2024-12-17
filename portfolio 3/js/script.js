document.addEventListener('DOMContentLoaded', function() {
    // Text to be typed
    const welcomeText = 'hi there!'  // Changed to single quotes
    const welcomeElement = document.getElementById('welcome-text')
    const mainTitle = document.getElementById('main-title')
    const description = document.getElementById('description')
    const btnBox = document.getElementById('btn-box')
    
    // Typing speed (in milliseconds)
    const typingSpeed = 100
    let charIndex = 0

    // Function to type text
    function typeText() {
        if (charIndex < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(charIndex)
            charIndex++
            setTimeout(typeText, typingSpeed)
        } else {
            setTimeout(() => {
                fadeInElement(mainTitle)
                setTimeout(() => {
                    fadeInElement(description)
                    setTimeout(() => {
                        fadeInElement(btnBox)
                    }, 500)
                }, 500)
            }, 300)
        }
    }

    function fadeInElement(element) {
        element.style.transition = 'opacity 1s ease-in-out'
        element.style.opacity = '1'
    }

    setTimeout(typeText, 500)
})