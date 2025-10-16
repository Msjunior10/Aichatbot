// Black/White Floating Orbs Background Effect
const canvas = document.createElement('canvas');
canvas.id = 'floating-orbs-canvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Orb class
class FloatingOrb {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 8; // 8-28px (larger)
        this.speedX = (Math.random() - 0.5) * 2; // Faster movement (-1 to 1)
        this.speedY = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6 (more visible)
        this.isBlack = Math.random() < 0.7; // 70% black, 30% white
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen edges
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;

        // Gentle pulsing effect
        this.opacity = Math.sin(Date.now() * 0.002 + this.x * 0.01) * 0.2 + 0.4;
    }

    draw() {
        ctx.save();
        
        // Create gradient for the orb
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size
        );
        
        if (this.isBlack) {
            gradient.addColorStop(0, `rgba(0, 0, 0, ${this.opacity})`);
            gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
        } else {
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

// Create orbs array
const orbs = [];
const orbCount = 175; 

for (let i = 0; i < orbCount; i++) {
    orbs.push(new FloatingOrb());
}

// Animation loop
function animate() {
    // Clear canvas with slight transparency for trailing effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update and draw orbs
    orbs.forEach(orb => {
        orb.update();
        orb.draw();
    });

    requestAnimationFrame(animate);
}

// Start animation
animate();