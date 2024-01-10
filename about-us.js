const flowerCanvas = document.getElementById('flowerCanvas');
const ctx = flowerCanvas.getContext('2d');

flowerCanvas.width = window.innerWidth;
flowerCanvas.height = window.innerHeight;

function drawFlower(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 50);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y - 50, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x - 20, y - 30, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x + 20, y - 30, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, y - 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'brown';
    ctx.fill();
    ctx.closePath();
}

function getRandomCoordinates() {
    const x = Math.random() * flowerCanvas.width;
    const y = Math.random() * flowerCanvas.height;
    return { x, y };
}

for (let i = 0; i < 10; i++) {
    const { x, y } = getRandomCoordinates();
    drawFlower(x, y);
}




  
  
  
  
  