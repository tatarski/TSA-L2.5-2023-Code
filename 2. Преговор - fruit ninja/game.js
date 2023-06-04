let plodX = [], plodY = [],
    plodTip = [], brPlodove = 0;
function randomInteger(dokude) {
    return Math.floor(Math.random() * dokude);
}
function areColliding(x1, y1, shir1, vis1, x2, y2, shir2, vis2) {
    if(x2<=x1+shir1){
        if(x1<=+x2+shir2){
            if(y2<=y1+vis1){
                if(y1<=y2+vis2){
                    return 1;
                }
            }
        }
    }
}
function distance(x1, y1, x2, y2) {
    let a = x1-x2, b = y1-y2;
    let c = Math.sqrt(a*a + b*b);
    return c;
}
function areCirclesColliding(x1, y1, r1, x2, y2, r2) {
    return (r1+r2) >= distance(x1, y1, x2, y2);
}
function rodiPlod() {
    // добавя нов плод в масивите
}
function init() {
    for(let i = 0; i < 10; i=i+1) {
    // Раждаме един плод
        plodX[i] = randomInteger(800);
        plodY[i] = 0;
        plodTip[i] = randomInteger(2); // 0- kvadrat, 1 - кръг
        brPlodove++;
    }
}
let t = 0; // колко ъпдейта са минали
function update() {
    t++;
    if(t%50 == 0) {
        plodX[brPlodove] = randomInteger(800);
        plodY[brPlodove] = 0;
        plodTip[brPlodove] = randomInteger(2); // 0- kvadrat, 1 - кръг
        brPlodove++;
    }
    plodY[0] += 1;
    
}
function draw() {
    context.font = "50px Courier New";
    context.fillText("ZELKA", 100, 100); 
    context.beginPath();
    context.moveTo(10, 10); context.lineTo(50, 60);
    context.stroke();
    for (let i = 0; i < brPlodove; i = i + 1) {
        if (plodTip[i] == 0) {
            context.fillStyle = "green";
            context.fillRect(plodX[i], plodY[i], 50, 50);
        } else if (plodTip[i] == 1) {
            context.fillStyle = "orange";
            context.beginPath();
            context.arc(plodX[i], plodY[i], 15, 0, 2*Math.PI);
            context.fill();
        }
    }
}
function mouseup() {
    if (plodTip[0] == 0) {
        if(areColliding(mouseX, mouseY, 1, 1, plodX[0], plodY[0], 50, 50)) {
            plodX[0] = undefined; // Затриваме плод
        }
    }
    if (plodTip[0] == 1) {
        if(areCirclesColliding(mouseX, mouseY, 1, plodX[0], plodY[0], 15)) {
            plodX[0] = undefined; // Затриваме плода
        }
    }
}