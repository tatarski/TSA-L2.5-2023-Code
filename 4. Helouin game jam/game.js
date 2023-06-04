function init() {
}
let t = 0;
let dT = 0.05;
function update()
{
    t += dT;
    dT -= 0.0001;
    if(dT <= 0) {
        dT = 0;
    }
}
function drawPie(radius, N, color, text) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(0, 0);
    context.arc(0, 0, radius, 0, 2*Math.PI/N);
    context.fill();
    context.stroke();
    context.fillStyle = "black";
    context.font = "30px Courier New";
    context.fillText(text, radius/2, 0);
}
function draw() {
    context.save();
    context.translate(mouseX, mouseY);
    let n = 10 
    context.rotate(t);
    for(let i = 0; i < n; i++) {
        context.rotate(2*Math.PI/n)
        drawPie(100, n, "hsl(" + Math.floor((360/n)*i) + ", 100%, 50%)", i);
    }
    context.restore();
}