export const drawBox = (detections, ctx) =>{
    detections.forEach(predictions=>{
        // Get predictions result
        const [x,y,width,height] = predictions['bbox'];
        const text = predictions ['class'];

        // styling format
        const color = 'red'
        ctx.strokeStyle = color
        ctx.font = '20px Arial'
        ctx.fillStyle = color

        // draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    })
}