const flowerCanvas = document.getElementById('flowerCanvas');
        const ctx = flowerCanvas.getContext('2d');
        
        // Set canvas size to cover the entire window
        flowerCanvas.width = window.innerWidth;
        flowerCanvas.height = window.innerHeight;

        // Function to draw a sunflower-like shape
        function drawSunflower(x, y) {
            // Petals
            ctx.beginPath();
            ctx.arc(x, y, 25, 0, Math.PI * 2);
            ctx.fillStyle = '#FFC300';
            ctx.fill();
            ctx.closePath();

            // Center
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'brown';
            ctx.fill();
            ctx.closePath();
        }

        // Generate random coordinates for sunflowers
        function getRandomCoordinates() {
            const x = Math.random() * flowerCanvas.width;
            const y = Math.random() * flowerCanvas.height;
            return { x, y };
        }

        // Draw sunflowers on the flower canvas
        for (let i = 0; i < 10; i++) {
            const { x, y } = getRandomCoordinates();
            drawSunflower(x, y);
        }