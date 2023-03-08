// setting canvas (thanks GPT for the help, even if I improved it a bit )
const draw = (canvas, metricArray) => {
    const drawArea = canvas.current;
    const ctx = drawArea.getContext('2d');
    ctx.strokeStyle = '#fa913c';

    // starting entire new graph
    ctx.clearRect(0, 0, drawArea.width, drawArea.height);
    ctx.beginPath();
    
    // Move to the first point
    let firstX = drawArea.width;
    let firstY = drawArea.height - (metricArray[metricArray.length - 1] * (drawArea.height / 100));
    ctx.moveTo(firstX, firstY);
    
    // draw lines for all the values, from right to left
    for (let i = metricArray.length - 2; i >= 0; i--) {
        let x = drawArea.width - ((metricArray.length - 1 - i) * 20);
        let y = drawArea.height - (metricArray[i] * (drawArea.height / 100));
        ctx.lineTo(x, y);
    }
    
    // filling area between lines and bottom
    fillArea(drawArea, ctx, firstX, firstY);
    // Stroke the path
    ctx.stroke();
    };

const fillArea = (drawArea, ctx, firstX, firstY) => {
    // Create a linear gradient from the top to the bottom of the canvas
    const gradient = ctx.createLinearGradient(0, 0, 0, drawArea.height);
    gradient.addColorStop(0, 'rgba(250, 145, 60, 0.8)');
    gradient.addColorStop(1, 'rgba(0,0,0, 1)');

    // Initializing the bottom line to fill the gradient
    ctx.lineTo(0, drawArea.height);
    ctx.lineTo(drawArea.width, drawArea.height);
    //going to the rightest value
    ctx.lineTo(firstX, firstY);
    
    ctx.closePath();
    
    // filling with gradient
    ctx.fillStyle = gradient;
    ctx.fill();
}

const drawLegend = (canvas) => {
    // Draw the legend
    const legendDrawArea = canvas.current;
    const legendCtx = legendDrawArea.getContext('2d');
    legendCtx.font = '12px sans-serif white';
    legendCtx.textBaseline = 'middle';
    legendCtx.textAlign = 'right';
    legendCtx.fillStyle = '#d0d0d0';
    for (let i = 0; i <= 100; i += 20) {
        let y = (1 - i / 100) * (legendDrawArea.height);

        if (y === 200) {
        y = 196;
        } else if (y === 0) {
        y = 6
        }
        const text = `${i}%`;
        legendCtx.fillText(text, legendDrawArea.width - 5, y);
    }
}

export {draw, drawLegend};