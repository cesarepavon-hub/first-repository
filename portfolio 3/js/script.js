//1. Fade in animation and typing effect

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Text to be typed
    const welcomeText = "hi there!";
    const welcomeElement = document.getElementById('welcome-text');
    const mainTitle = document.getElementById('main-title');
    const description = document.getElementById('description');
    const btnBox = document.getElementById('btn-box');
    
    // Typing speed (in milliseconds)
    const typingSpeed = 100;
    let charIndex = 0;

    // Function to type text
    function typeText() {
        if (charIndex < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // After typing is complete, show other elements with fade in
            setTimeout(() => {
                fadeInElement(mainTitle);
                setTimeout(() => {
                    fadeInElement(description);
                    setTimeout(() => {
                        fadeInElement(btnBox);
                    }, 500);
                }, 500);
            }, 300);
        }
    }

    // Function to fade in elements
    function fadeInElement(element) {
        element.style.transition = 'opacity 1s ease-in-out';
        element.style.opacity = '1';
    }

    // Start the typing effect
    setTimeout(typeText, 500);
});

// Checking if everything is loading properly because it was crashing for some reason
console.log("Script is running");



//------------------------------------------------------------------------------------------------------------------------------------------------------------

//2. Smooth scroll up when clicking on the "back" button

document.addEventListener('DOMContentLoaded', function() {
    // Check if we can find the button
    var backButton = document.getElementById('back-to-top');
    console.log("Back button found:", backButton);

    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
});



//------------------------------------------------------------------------------------------------------------------------------------------------------------



//3. Hover function for skills. They won't take us anywhere now but in future developments they are buttons to take us to related experiences. 

function initSkillBoxes() {
    'use strict';
    
    // Get all skill boxes by their class names
    var boxes = document.querySelectorAll('.box1, .box2, .box3, .box4, .box5, .box6');
    
    // Add hover effect to each box
    boxes.forEach(function(box) {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initSkillBoxes();
});



//------------------------------------------------------------------------------------------------------------------------------------------------------------



//4. Dynamic project counter in the About Me page. 


// Initialize when DOM loads (add this to your existing DOMContentLoaded event)
document.addEventListener('DOMContentLoaded', function() {
    initTypewriter();  // Your existing initialization
    initSkillBoxes();  // New initialization
});

function initCounters() {
    'use strict';
    
    // Define your final numbers
    var counters = {
        yearsCount: 5,    // 5 years
        projectCount: 20,  // 20 projects
        clientCount: 15    // 15 clients
    };

    function animateValue(id, end) {
        var current = 0;
        var duration = 2000; // 2 seconds for the animation
        var start = Date.now();
        
        function updateCount() {
            var now = Date.now();
            var remaining = Math.max(0, start + duration - now);
            var value = Math.round(end - (remaining * end / duration));
            
            document.getElementById(id).textContent = value + "+";
            
            if (remaining > 0) {
                requestAnimationFrame(updateCount);
            }
        }
        
        requestAnimationFrame(updateCount);
    }

    // Start all animations
    Object.keys(counters).forEach(function(id) {
        animateValue(id, counters[id]);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCounters();
});