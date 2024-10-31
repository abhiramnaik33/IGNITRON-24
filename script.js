const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Bubble properties
const bubbles = [];
const colors = ["rgba(0, 255, 0, 0.7)"]; // Green color with transparency

function createBubble() {
    const radius = Math.random() * 20 + 10; // Random radius between 10 and 30
    const x = Math.random() * canvas.width;
    const y = canvas.height + radius; // Start from the bottom
    const speed = Math.random() * 2 + 1; // Speed of bubble rising

    bubbles.push({ x, y, radius, speed });
}

function updateBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[0]; // Use the green color
        ctx.fill();

        // Update bubble position
        bubble.y -= bubble.speed;

        // Remove bubble if it goes out of view
        if (bubble.y + bubble.radius < 0) {
            bubbles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    updateBubbles();
    requestAnimationFrame(animate);
}

// Create bubbles at intervals
setInterval(createBubble, 500); // Create a new bubble every 500ms

// Start animation
animate();
