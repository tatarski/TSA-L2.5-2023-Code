let canvas, context, mouseX, mouseY;
function onBodyLoad() {
    canvas = document.getElementById("canvas-id");
    context = canvas.getContext("2d");
    requestAnimationFrame = window.requestAnimationFrame;
    redraw();
    setInterval(update, 10);
    init();
    canvas.onclick = function (e) { 
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        mouseup();
    }
}
function redraw() {
    // context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 0.01;
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 1;
    draw();
    requestAnimationFrame(redraw);
}