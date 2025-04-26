document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-button');
    
    colorButtons.forEach(button => {
        const color = button.getAttribute('data-color');
        
        // Set up event listeners for each button
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.4), 0 0 25px ${color}40`;
            
            const hoverGlow = button.querySelector('.hover-glow');
            if (hoverGlow) {
                hoverGlow.style.opacity = '0.4';
            }
            
            const pulseAnimation = button.querySelector('.pulse-animation');
            if (pulseAnimation) {
                pulseAnimation.style.opacity = '0.4';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            
            const hoverGlow = button.querySelector('.hover-glow');
            if (hoverGlow) {
                hoverGlow.style.opacity = '0';
            }
            
            const pulseAnimation = button.querySelector('.pulse-animation');
            if (pulseAnimation) {
                pulseAnimation.style.opacity = '0';
            }
        });
        
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
            button.style.boxShadow = `0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px ${color}60`;
            
            const bottomGlow = button.querySelector('.bottom-glow');
            if (bottomGlow) {
                bottomGlow.style.opacity = '0.7';
            }
            
            const pressEffect = button.querySelector('.press-effect');
            if (pressEffect) {
                pressEffect.style.opacity = '0.2';
            }
            
            const solidCircle = button.querySelector('.solid-circle');
            if (solidCircle) {
                solidCircle.style.transform = 'translate(-50%, -50%) scale(0.9)';
            }
        });
        
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.05)';
            button.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.4), 0 0 25px ${color}40`;
            
            const bottomGlow = button.querySelector('.bottom-glow');
            if (bottomGlow) {
                bottomGlow.style.opacity = '0.4';
            }
            
            const pressEffect = button.querySelector('.press-effect');
            if (pressEffect) {
                pressEffect.style.opacity = '0';
            }
            
            const solidCircle = button.querySelector('.solid-circle');
            if (solidCircle) {
                solidCircle.style.transform = 'translate(-50%, -50%) scale(1.2)';
            }
        });
        
        // Ensure proper reset on blur
        button.addEventListener('blur', () => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
            
            const hoverGlow = button.querySelector('.hover-glow');
            if (hoverGlow) {
                hoverGlow.style.opacity = '0';
            }
            
            const bottomGlow = button.querySelector('.bottom-glow');
            if (bottomGlow) {
                bottomGlow.style.opacity = '0.4';
            }
            
            const pulseAnimation = button.querySelector('.pulse-animation');
            if (pulseAnimation) {
                pulseAnimation.style.opacity = '0';
            }
            
            const pressEffect = button.querySelector('.press-effect');
            if (pressEffect) {
                pressEffect.style.opacity = '0';
            }
            
            const solidCircle = button.querySelector('.solid-circle');
            if (solidCircle) {
                solidCircle.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
    });
});