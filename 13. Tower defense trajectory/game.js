let x = [600, 100, 800],
    y = [600, 100, 50];
let celIndex= 1;
let vragX = [], vragY = [];       // да станат масиви
let brVragove = 0;
function init() {
    vragX[0] = x[0];
    vragY[0] = y[0];
    brVragove++;
 }
function rodiVrag() {
    vragX[brVragove] = x[0];
    vragY[brVragove] = y[0];
    brVragove++;
}
function distance(x1,y1,x2,y2) {
    let a = y1-y2;
    let b = x1-x2;
    return Math.sqrt(a*a + b*b);
}
function update() {
    for(let i = 0; i < brVragove; i++) {
        ostavashto_razstoqnie = distance(
            vragX[i], vragY[i], x[celIndex], y[celIndex]
        )
        vragX[i] += (x[celIndex] - vragX[i]) / ostavashto_razstoqnie;
        vragY[i] += (y[celIndex] - vragY[i]) / ostavashto_razstoqnie;
        if (ostavashto_razstoqnie < 3) {
            celIndex++;
            console.log("SMQNA NA CEL")
        }
}
}
function draw() {
    for(let i = 0; i < brVragove; i++){ 
        drawImage(troll, vragX[i], vragY[i], 60, 80);
    }
    context.beginPath();
    context.moveTo(x[0], y[0]);
    context.lineTo(x[1], y[1]);
    context.stroke();
    context.beginPath();
    context.moveTo(x[1], y[1]);
    context.lineTo(x[2], y[2]);
    context.stroke();
}
function mouseup() {
}
function keyup(key) {
}

