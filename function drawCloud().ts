function drawCloud() {
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    
    const cloudWidth = Math.max(350, canvas.width);
    const cloudHeight = Math.max(35, canvas.height);
    
    // Draw the cloud path
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.bezierCurveTo(50, 50, 20, 100, 100, 100);
    ctx.bezierCurveTo(100, 100, 150, 120, 200, 100);
    ctx.bezierCurveTo(200, 100, 220, 120, 250, 100);
    ctx.bezierCurveTo(250, 100, 300, 80, 350, 100);
    ctx.bezierCurveTo(350, 100, 400, 80, 450, 100);
    ctx.bezierCurveTo(450, 100, 480, 120, 500, 100);
    ctx.bezierCurveTo(500, 100, 550, 120, 550, 100);
    ctx.bezierCurveTo(550, 100, 580, 80, 600, 100);
    ctx.bezierCurveTo(600, 100, 650, 120, 700, 100);
    ctx.bezierCurveTo(700, 100, 730, 120, 750, 100);
    ctx.bezierCurveTo(750, 100, 800, 80, 850, 100);
    ctx.bezierCurveTo(850, 100, 900, 120, 900, 100);
    ctx.bezierCurveTo(900, 100, 950, 80, 950, 80);
    ctx.bezierCurveTo(950, 80, 950, 50, 900, 50);
    ctx.bezierCurveTo(900, 50, 850, 30, 800, 50);
    ctx.bezierCurveTo(800, 50, 750, 30, 700, 50);
    ctx.bezierCurveTo(700, 50, 650, 30, 600, 50);
    ctx.bezierCurveTo(600, 50, 550, 30, 500, 50);
    ctx.bezierCurveTo(500, 50, 480, 30, 450, 50);
    ctx.bezierCurveTo(450, 50, 400, 30, 350, 50);
    ctx.bezierCurveTo(350, 50, 300, 30, 250, 50);
    ctx.bezierCurveTo(250, 50, 220, 30, 200, 50);
    ctx.bezierCurveTo(200, 50, 150, 70, 100, 50);
    ctx.bezierCurveTo(100, 50, 80, 30, 50, 50);
    ctx.closePath();
    
    // Fill the cloud with white color
    ctx.fillStyle = 'white';
    ctx.fill();
}

// Call the drawCloud function
drawCloud();