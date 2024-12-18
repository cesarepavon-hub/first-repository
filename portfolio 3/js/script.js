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

// First check if everything is loading properly
console.log("Script is running");

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

function initSkillBoxes() {
    'use strict';
    
    // Skill descriptions
    var skillInfo = {
        skill1: "Creating user-centered solutions through research, testing, and iteration",
        skill2: "Conducting user research to understand needs, behaviors, and pain points",
        skill3: "Specialized in financial technology interfaces and systems",
        skill4: "Expert in creating intuitive banking applications and platforms",
        skill5: "Conducting thorough user testing sessions to validate designs",
        skill6: "Creating beautiful and functional user interfaces"
    };

    // Add click listeners to all skill boxes
    Object.keys(skillInfo).forEach(function(skillId) {
        var skillBox = document.getElementById(skillId);
        var originalText = skillBox.textContent;
        
        if (skillBox) {
            skillBox.addEventListener('click', function() {
                if (skillBox.dataset.expanded === 'true') {
                    // Return to original state
                    skillBox.textContent = originalText;
                    skillBox.dataset.expanded = 'false';
                    skillBox.style.fontSize = '';
                } else {
                    // Show description
                    skillBox.textContent = skillInfo[skillId];
                    skillBox.dataset.expanded = 'true';
                    skillBox.style.fontSize = '24px';
                }
            });

            // Add hover effect
            skillBox.addEventListener('mouseenter', function() {
                if (skillBox.dataset.expanded !== 'true') {
                    skillBox.style.transform = 'scale(1.02)';
                }
            });

            skillBox.addEventListener('mouseleave', function() {
                if (skillBox.dataset.expanded !== 'true') {
                    skillBox.style.transform = 'scale(1)';
                }
            });
        }
    });
}

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