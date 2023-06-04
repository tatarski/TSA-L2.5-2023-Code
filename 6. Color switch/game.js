function init() {
}
let t = 0;
function update() {
    t = t + 0.01;
}
function narisuvaiSegment(vutreshen_radius, debelina, centerX, centerY, uglova_golemina, zavurtane) {
    // Център centerX, centerY и вътрешен радиус 72 и външен радиус 72 + 22
    context.beginPath();
    context.arc(centerX, centerY, vutreshen_radius, 0 + zavurtane, 2*Math.PI - uglova_golemina + zavurtane, true);
    let rad = vutreshen_radius + debelina;
    let ugul = 2*Math.PI - uglova_golemina + zavurtane;
    context.lineTo(
        centerX + Math.cos(ugul) * rad,
        centerY + Math.sin(ugul) * rad
    );
    context.arc(centerX, centerY, vutreshen_radius + debelina, 2*Math.PI - uglova_golemina + zavurtane, zavurtane, false);
    context.closePath();
    context.fill();
    context.stroke();
}
function drawCircle(centerX, centerY, rad, zavurtane, br_segmenti, cvetove) {
    for(let i = 0; i < br_segmenti; i++) {
        context.fillStyle = cvetove[i];
        narisuvaiSegment(rad, 40, centerX, centerY,
         2*Math.PI/br_segmenti, zavurtane + i*(2*Math.PI/br_segmenti));
    }
}
function kakuvECvetaOtdolu(cvetove, brCvetove, zavurtane) {
    zavurtane = zavurtane - Math.PI/2 + 2*Math.PI;
    let uglovaGolemina = 2*Math.PI/brCvetove;

    zavurtane = zavurtane % (2*Math.PI);
    let indexCvqt = brCvetove- Math.floor(zavurtane/uglovaGolemina) - 1;
    indexCvqt += 1;
    if(indexCvqt == brCvetove) {
        indexCvqt = 0;
    }
    console.log(indexCvqt);
    return cvetove[indexCvqt];
}
function kakuvECvetaOtgore(cvetove, brCvetove, zavurtane) {
    zavurtane = zavurtane + Math.PI;
    return kakuvECvetaOtdolu(cvetove, brCvetove, zavurtane);
}
let cv = ["orange", "green", "blue", "yellow", "purple"];
let brCvetove = cv.length;
let brSegmenti = brCvetove;
function draw() {
    drawCircle(mouseX, mouseY, 60, t, brSegmenti, cv);
    drawImage(arrowUp, mouseX-25, mouseY +100, 50, 50);
    console.log(
        // kakuvECvetaOtdolu(cv, brCvetove, t)
    )
    console.log(
        kakuvECvetaOtgore(cv, brCvetove, t)
    )
}
function mouseup() {

}